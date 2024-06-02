'use client';

import { ProfileListCards } from './components/profile-list-cards';
import {
  ProfileListFilters,
  ProfileListFiltersLabel
} from './components/profile-list-filters';
import { ProfileListSearch } from './components/profile-list-search';
import { ProfileListSorting } from './components/profile-list-sorting';
import { useProfileFilters } from './hooks/use-profile-filters';
import { useProfileSorting } from './hooks/use-profile-sorting';

export const ProfileList = () => {
  const { filters, toQueryWhereFields } = useProfileFilters();
  const { sorting, toQuerySortByFields } = useProfileSorting();

  const query = {
    where: {
      ...toQueryWhereFields()
    },
    order_by: [toQuerySortByFields()]
  };

  return (
    <div className="w-full">
      <div className="space-y-2">
        <div className="flex gap-4">
          <div className="flex-1">
            <ProfileListSearch filters={filters} />
          </div>
        </div>
        <ProfileListFilters filters={filters} />
      </div>

      <div className="flex items-end justify-between">
        <ProfileListFiltersLabel filters={filters} />
        <ProfileListSorting sorting={sorting} />
      </div>
      <div className="mt-2">
        <ProfileListCards query={query} limit={10} />
      </div>
    </div>
  );
};
