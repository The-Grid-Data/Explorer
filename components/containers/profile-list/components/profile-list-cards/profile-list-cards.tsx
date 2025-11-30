'use client';
import { Progress } from '@/components/ui/progress';
import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';
import { useProfilesQueryContext } from '@/providers/profiles-query-provider';
import { useProfileSortingContext } from '@/providers/sorting-provider';
import { useInfiniteQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDebounceValue } from 'usehooks-ts';
import { ProfileCard, ProfileCardSkeleton } from '../profile-card';

const defaultLimit = 10;

export const SearchProfilesQuery = graphql(`
  query SearchProfiles(
    $order_by: [ProfileInfosOrderByExp!]
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
    $order_by: [TheGridRankingOrderBy!]
    $where: TheGridRankingBoolExp
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
  const { sorting } = useProfileSortingContext();

  // Check if we're sorting by connectionScore to determine which query to use
  const isConnectionScoreSort = sorting.sortBy === 'connectionScore';

  const { ref: fetchNextPageTriggerRef, inView } = useInView({ threshold: 1 });
  const limit = query?.limit ?? defaultLimit;

  // Debounce the query to avoid excessive requests during rapid filter changes
  const [debouncedQuery] = useDebounceValue(query, 300);

  const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery({
    queryKey: ['searchProfiles', isConnectionScoreSort, sorting.sortBy, sorting.sortOrder, JSON.stringify(debouncedQuery)],
    placeholderData: previousData => previousData,
    initialPageParam: {
      limit,
      offset: 0
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      const lastOffset = ((lastPageParam as any)?.offset as number) ?? 0;

      // Check the appropriate data structure based on query type
      const hasData = isConnectionScoreSort
        ? (lastPage as any).theGridRankings?.length
        : (lastPage as any).profileInfos?.length;

      if (hasData) {
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
      if (isConnectionScoreSort) {
        // Transform the query for theGridRankings structure
        const rankingQuery = {
          order_by: debouncedQuery.order_by,
          where: debouncedQuery.where ? {
            roots: {
              profileInfos: debouncedQuery.where
            }
          } : undefined,
          ...pageParam
        };
        return await execute(SearchProfilesByRankingQuery, rankingQuery);
      } else {
        return await execute(SearchProfilesQuery, { ...debouncedQuery, ...pageParam });
      }
    }
  });

  // Extract profiles based on query type
  const profiles = data?.pages?.flatMap(page => {
    if (isConnectionScoreSort) {
      // Extract profiles from theGridRankings structure (matching discovery approach)
      return (page as any).theGridRankings
        ?.flatMap((ranking: any) => ranking?.roots || [])
        ?.flatMap((root: any) => root?.profileInfos || []);
    } else {
      // Extract profiles from direct profileInfos structure
      return (page as any).profileInfos;
    }
  }).filter(Boolean);

  console.table(
    profiles?.slice(0, 10).map((record: any) => ({
      connectionScore: record?.root?.theGridRanking?.[0]?.connectionScore,
      name: record?.name
    }))
  );

  useEffect(() => {
    if (inView && !isFetching && !isError) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isFetching, isError]);
  const nrOfFetchedProfiles = profiles?.length ?? 0;

  return (
    <div className="pb-2">
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {profiles?.map(
            (profile, index) =>
              profile && <ProfileCard key={index} profile={profile} />
          )}
        </div>
      )}
      {isFetching && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
          <ProfileCardSkeleton />
        </div>
      )}
      {/* Infinite scroll trigger */}
      {!isFetching && <div className="h-40" ref={fetchNextPageTriggerRef} />}
    </div>
  );
};
