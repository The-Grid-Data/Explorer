'use client';

import { QueryDialogButton } from '@/components/containers/query-dialog-button';
import {
  ProfileListCards,
  SearchProfilesQuery
} from './components/profile-list-cards';
import { ProfileListHeroFilters } from './components/profile-list-hero-filters';
import { ProfileListControlBar } from './components/profile-list-control-bar';
import {
  ProfileListFilters,
  ProfileListFiltersLabel
} from './components/profile-list-filters';
import { ProfileListSorting } from './components/profile-list-sorting';
import { ProfileFiltersProvider, useProfileFiltersContext } from '@/providers/filters-provider';
import { ProfileSortingProvider } from '@/providers/sorting-provider';
import { siteConfig } from '@/lib/site-config';
import {
  ProfileQueryProvider,
  useProfilesQueryContext
} from '@/providers/profiles-query-provider';
import { ProfileListFiltersList } from './components/profile-list-filters/profile-list-filters-list';
import { useState, useEffect } from 'react';

const ProfileListContent = () => {
  const { triggerScan } = useProfileFiltersContext();
  const [hasInitialScan, setHasInitialScan] = useState(false);

  // Trigger initial scan on mount so users see results immediately
  // Pass false to not show the scan loader on initial load
  useEffect(() => {
    if (!hasInitialScan) {
      setHasInitialScan(true);
      triggerScan(false);
    }
  }, [hasInitialScan, triggerScan]);

  return (
    <div className="w-full space-y-4">
      <div className="container space-y-4 md:space-y-10">
        {/* Control Bar: Search, Scan with Filters, Clear Filters */}
        <ProfileListControlBar />

        {/* Filter Sections */}
        <ProfileListHeroFilters />

        <div className="w-full">
          <div className="flex flex-col items-start gap-4 pt-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
              <ProfileListFilters />
            </div>

            <div className="flex w-full flex-col items-end gap-4 md:w-fit md:flex-row md:justify-start">
              <ProfileListSorting />
              {siteConfig.featureFlags?.displayQueriesButtons && (
                <ViewQueryButton />
              )}
            </div>
          </div>
          
          <div className="mt-4">
            <ProfileListFiltersLabel />
          </div>
          
          <ProfileListCards />
        </div>
      </div>
    </div>
  );
};

export const ProfileList = () => {
  return (
    <ProfileFiltersProvider>
      <ProfileSortingProvider>
        <ProfileQueryProvider>
          <ProfileListContent />
        </ProfileQueryProvider>
      </ProfileSortingProvider>
    </ProfileFiltersProvider>
  );
};

export const useFiltersLoadingState = () => {
  const { pendingFilters } = useProfileFiltersContext();
  const filters = pendingFilters.filters;
  
  // Check if any critical filters are still loading
  const isLoading =
    filters.productTypesFilter.options?.isLoading ||
    filters.profileSectorsFilter.options?.isLoading ||
    filters.tagsFilter.options?.isLoading;
  
  return isLoading ?? true;
};

const ViewQueryButton = () => {
  const query = useProfilesQueryContext();
  return (
    <QueryDialogButton
      queryDocument={SearchProfilesQuery as unknown as string}
      variables={query}
      buttonLabel="View query"
    />
  );
};
