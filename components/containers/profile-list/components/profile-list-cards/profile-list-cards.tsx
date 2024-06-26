import {
  SearchProfilesQueryVariables,
  useInfiniteSearchProfilesQuery
} from '@/lib/graphql/generated-graphql';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ProfileCard, ProfileCardSkeleton } from '../profile-card';

export type ProfileListCardsProps = {
  query: SearchProfilesQueryVariables;
};

const defaultLimit = 10;

export const ProfileListCards = ({ query }: ProfileListCardsProps) => {
  const { ref: fetchNextPageTriggerRef, inView } = useInView({ threshold: 1 });
  const limit = query?.limit ?? defaultLimit;

  const { data, isFetching, isError, fetchNextPage } =
    useInfiniteSearchProfilesQuery(query, {
      initialPageParam: {
        limit,
        offset: 0
      },
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      getNextPageParam: (lastPage, allPages, lastPageParam) => {
        const lastOffset = ((lastPageParam as any)?.offset as number) ?? 0;

        if (lastPage.profiles.length > 0) {
          return {
            offset: lastOffset + limit,
            limit
          };
        }
      }
    });

  useEffect(() => {
    if (inView && !isFetching) {
      fetchNextPage();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView, isFetching]);

  const profiles = data?.pages?.flatMap(page => page.profiles);
  const nrOfFetchedProfiles = profiles?.length ?? 0;

  return (
    <div className="flex flex-col gap-8 pb-2">
      {isError ? (
        <p className="text-base font-light">
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
        profiles?.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))
      )}
      {isFetching && <ProfileCardSkeleton />}
      {/* Infinite scroll trigger */}
      {!isFetching && <div className="h-40" ref={fetchNextPageTriggerRef} />}
    </div>
  );
};
