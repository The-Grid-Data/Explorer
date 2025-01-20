'use client';

import { QueryDialogButton } from '@/components/containers/query-dialog-button';
import {
  ProfileListCards,
  SearchProfilesQuery
} from './components/profile-list-cards';
import { ProfileListHeroFilters } from './components/profile-list-hero-filters';
import {
  ProfileListFilters,
  ProfileListFiltersLabel
} from './components/profile-list-filters';
import { ProfileListSearch } from './components/profile-list-search';
import { ProfileFiltersProvider } from '@/providers/filters-provider';
import { ProfileSortingProvider } from '@/providers/sorting-provider';
import { ProfileListSorting } from './components/profile-list-sorting';
import { siteConfig } from '@/lib/site-config';
import {
  ProfileQueryProvider,
  useProfilesQueryContext
} from '@/providers/profiles-query-provider';
import { ProfileListFiltersList } from './components/profile-list-filters/profile-list-filters-list';

export const ProfileList = () => {
  return (
    <ProfileFiltersProvider>
      <ProfileSortingProvider>
        <ProfileQueryProvider>
          <div className="w-full space-y-4">
            <div className="container space-y-4 md:space-y-10">
              <ProfileListHeroFilters />

              <div className="flex gap-8">
                <div className="hidden w-72 shrink-0 lg:block">
                  <ProfileListFiltersList />
                </div>
                <div className="w-full">
                  <div className="flex flex-col items-start gap-12 pt-4 lg:flex-row">
                    <div className="flex w-full flex-col gap-4">
                      <ProfileListSearch />
                      <div className="flex flex-col gap-4 md:flex-row">
                        <div className="lg:hidden">
                          <ProfileListFilters />
                        </div>
                        <ProfileListFiltersLabel />
                      </div>
                    </div>

                    <div className="flex w-full flex-col items-end gap-4 md:w-fit md:flex-row md:justify-start">
                      <ProfileListSorting />
                      {siteConfig.displayQueries && <ViewQueryButton />}
                    </div>
                  </div>
                  <ProfileListCards />
                </div>
              </div>
            </div>
          </div>
        </ProfileQueryProvider>
      </ProfileSortingProvider>
    </ProfileFiltersProvider>
  );
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
