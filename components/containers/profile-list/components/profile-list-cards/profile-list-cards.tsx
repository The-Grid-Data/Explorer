'use client';
import { useInView } from 'react-intersection-observer';
import { useEffect, useMemo } from 'react';
import { ProfileCard, ProfileCardSkeleton } from '../profile-card';
import { useDebounceValue } from 'usehooks-ts';
import { useProfilesQueryContext } from '@/providers/profiles-query-provider';
import { useProfileSortingContext } from '@/providers/sorting-provider';
import { useInfiniteQuery } from '@tanstack/react-query';
import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';
import { Progress } from '@/components/ui/progress';

const defaultLimit = 10;

export const SearchProfilesQuery = graphql(`
  query SearchProfiles(
    $order_by: [ProfileInfosOrderBy!]
    $where: ProfileInfosBoolExp
    $limit: Int
    $offset: Int
  ) {
    profileInfos(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $order_by
    ) {
      ...ProfileCardFragment
    }
  }
`);

export const SearchProfilesByRankingQuery = graphql(`
  query SearchProfilesByRanking(
    $order_by: [theGridRankingOrderBy!]
    $where: theGridRankingBoolExp
    $limit: Int
    $offset: Int
  ) {
    theGridRankings(
      limit: $limit
      offset: $offset
      where: $where
      order_by: $order_by
    ) {
      connectionScore
      rootId
      roots {
        profileInfos {
          ...ProfileCardFragment
        }
      }
    }
  }
`);

export const ProfileListCards = () => {
  const query = useProfilesQueryContext();
  const sorting = useProfileSortingContext();

  const [debouncedQuery] = useDebounceValue(query, 500);

  const { ref: fetchNextPageTriggerRef, inView } = useInView({ threshold: 1 });
  const limit = query?.limit ?? defaultLimit;

  const isUsingConnectionScore = sorting.sorting.sortBy === 'connectionScore';

  const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery({
    queryKey: ['searchProfiles', debouncedQuery, isUsingConnectionScore],
    placeholderData: previousData => previousData,
    initialPageParam: {
      limit,
      offset: 0
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastOffset = ((lastPageParam as any)?.offset as number) ?? 0;

      const hasResults = isUsingConnectionScore 
        ? lastPage.theGridRankings?.length
        : lastPage.profileInfos?.length;

      if (hasResults) {
        return {
          offset: lastOffset + limit,
          limit
        };
      }
    },
    queryFn: async ({
      pageParam
    }: {
      pageParam: { limit: number; offset: number };
    }) => {
      if (isUsingConnectionScore) {
        // Build the where clause for theGridRankings query
        const rankingWhere = debouncedQuery?.where ? {
          roots: {
            profileInfos: debouncedQuery.where
          }
        } : undefined;

        return await execute(SearchProfilesByRankingQuery, {
          ...pageParam,
          where: rankingWhere,
          order_by: sorting.toQuerySortByFields()
        });
      } else {
        return await execute(SearchProfilesQuery, { ...debouncedQuery, ...pageParam });
      }
    }
  });

  useEffect(() => {
    if (inView && !isFetching && !isError) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isFetching, isError]);

  const profiles = useMemo(() => {
    if (isUsingConnectionScore) {
      return data?.pages
        ?.flatMap(page => page.theGridRankings)
        .map(ranking => ranking?.roots?.profileInfos?.[0])
        .filter(Boolean);
    } else {
      return data?.pages
        ?.flatMap(page => page.profileInfos)
        ?.filter(Boolean);
    }
  }, [data, isUsingConnectionScore]);

  const nrOfFetchedProfiles = profiles?.length ?? 0;

  return (
    <div className="flex flex-col gap-8 pb-2">
      {isFetching && <Progress className="mt-2" indeterminate />}
      {isError ? (
        <p className="text-center text-muted-foreground">
          There was an error with your search, please try again or contact the
          administrator.
        </p>
      ) : !isFetching && (!profiles || nrOfFetchedProfiles < 1) ? (
        <div className="ml-auto mr-auto mt-12 max-w-md ">
          <p className="text-center text-muted-foreground">
            No data was found with the current criteria, please update your
            search term or filters and try again.
          </p>
        </div>
      ) : (
        profiles?.map(
          (profile, index) =>
            profile && <ProfileCard key={index} profile={profile} />
        )
      )}
      {isFetching && <ProfileCardSkeleton />}
      {/* Infinite scroll trigger */}
      {!isFetching && <div className="h-40" ref={fetchNextPageTriggerRef} />}
    </div>
  );
};
