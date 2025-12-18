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
    $sortOrder: OrderBy!
    $where: RootsBoolExp
    $limit: Int
    $offset: Int
  ) {
    roots(
      limit: $limit
      offset: $offset
      where: $where
      order_by: { gridRank: { score: $sortOrder } }
    ) {
      profileInfos {
        ...ProfileCardFragment
      }
    }
  }
`);

export const ProfileListCards = () => {
  const query = useProfilesQueryContext();
  const { sorting } = useProfileSortingContext();

  // Check if we're sorting by gridRank.score to determine which query to use
  const isGridRankSort = sorting.sortBy === 'gridRank.score';

  const { ref: fetchNextPageTriggerRef, inView } = useInView({ threshold: 1 });
  const limit = query?.limit ?? defaultLimit;

  // Debounce the query to avoid excessive requests during rapid filter changes
  const [debouncedQuery] = useDebounceValue(query, 300);

  const { data, isFetching, isError, fetchNextPage } = useInfiniteQuery({
    queryKey: ['searchProfiles', isGridRankSort, sorting.sortBy, sorting.sortOrder, JSON.stringify(debouncedQuery)],
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
      const hasData = isGridRankSort
        ? (lastPage as any).roots?.length
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
      if (isGridRankSort) {
        const gridRankNotNull: any = { gridRank: { score: { _is_null: false } } };
        const profileInfosWhere: any = debouncedQuery.where
          ? { profileInfos: debouncedQuery.where }
          : undefined;

        const where =
          profileInfosWhere
            ? { _and: [gridRankNotNull, profileInfosWhere] }
            : gridRankNotNull;

        return await execute(SearchProfilesByRankingQuery, {
          sortOrder: sorting.sortOrder,
          where,
          ...pageParam
        });
      } else {
        return await execute(SearchProfilesQuery, { ...debouncedQuery, ...pageParam });
      }
    }
  });

  // Extract profiles based on query type
  const profiles = data?.pages?.flatMap(page => {
    if (isGridRankSort) {
      // Extract profiles from Roots -> ProfileInfos
      return (page as any).roots?.flatMap((root: any) => root?.profileInfos || []);
    } else {
      // Extract profiles from direct profileInfos structure
      return (page as any).profileInfos;
    }
  }).filter(Boolean);

  console.table(
    profiles?.slice(0, 10).map((record: any) => ({
      gridRankScore: record?.root?.gridRank?.score,
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
