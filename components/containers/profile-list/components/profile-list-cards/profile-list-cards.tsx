import { useInfiniteSearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { ProfileCard, ProfileCardSkeleton } from '../profile-card';
import { useToast } from '@/components/ui/use-toast';
import { ToastAction } from '@/components/ui/toast';
import { dispatchCustomEvent } from '@/hooks/use-event-listener';
import { useDebounceValue } from 'usehooks-ts';
import { useProfilesQueryContext } from '@/providers/profiles-query-provider';

const defaultLimit = 10;
// const resultToastId = 'search-results-toast';

export const ProfileListCards = () => {
  const query = useProfilesQueryContext();

  // const { toast, findToastById } = useToast();
  // const resultToast = findToastById(resultToastId);

  const [debouncedQuery] = useDebounceValue(query, 500);

  const { ref: fetchNextPageTriggerRef, inView } = useInView({ threshold: 1 });
  const limit = query?.limit ?? defaultLimit;

  const { data, isFetching, isError, fetchNextPage, status } =
    useInfiniteSearchProfilesQuery(debouncedQuery, {
      placeholderData: previousData => previousData,
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

  // const { update: updateResultsToast, display: displayResultsToast } = toast({
  //   trigger: false,
  //   id: resultToastId,
  //   title: 'Loading...',
  //   action: <ToastActionComponent />
  // });

  // useEffect(() => {
  //   if (status === 'success') {
  //     updateResultsToast({
  //       id: resultToastId,
  //       title: 'Results updated'
  //     });
  //   } else if (status === 'pending') {
  //     !resultToast?.open && displayResultsToast();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [profiles, resultToast?.open]);

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

const ToastActionComponent = () => {
  const handleToastActionClick = () => {
    const searchBarElement = document.getElementById('search-bar');
    if (searchBarElement) {
      const position = searchBarElement.getBoundingClientRect();
      window.scrollTo({
        top: position.top + window.scrollY - 20,
        left: position.left,
        behavior: 'smooth'
      });
      dispatchCustomEvent('close-dialog');
    }
  };

  return (
    <ToastAction altText="Show me" onClick={handleToastActionClick}>
      Show me
    </ToastAction>
  );
};
