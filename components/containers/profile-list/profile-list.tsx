'use client';

import { QueryDialogButton } from '@/components/containers/query-dialog-button';
import { ProfileListCards } from './components/profile-list-cards';
import {
  ProfileListFilters,
  ProfileListFiltersLabel
} from './components/profile-list-filters';
import { ProfileListSearch } from './components/profile-list-search';
import { ProfileListSorting } from './components/profile-list-sorting';
import { useProfileFilters } from './hooks/use-profile-filters';
import { useProfileSorting } from './hooks/use-profile-sorting';
import { SearchProfilesDocument } from '@/lib/graphql/generated-graphql';
import { withDefaultWhereFilter } from '@/lib/utils/default-where-filter';
import CheckboxGrid from '@/components/ui/checkbox-grid';
import { siteConfig } from '@/lib/site-config';

export const ProfileList = () => {
  const { filters, toQueryWhereFields, isLoading } = useProfileFilters();
  const { sorting, toQuerySortByFields } = useProfileSorting();

  const query = {
    where: withDefaultWhereFilter(toQueryWhereFields()),
    order_by: [toQuerySortByFields()],
    limit: 10,
    offset: 0
  };

  return (
    <div className="w-full space-y-4">
      <div className="container space-y-4 md:space-y-10">
        <div className="space-y-4">
          <h1 className="text-xl font-bold lg:text-xl ">
            Product types{' '}
            {filters.productTypesFilter?.options &&
              `(${filters.productTypesFilter.options.length})`}
          </h1>
          <CheckboxGrid
            isLoading={isLoading}
            selected={filters.productTypesFilter.value}
            options={filters.productTypesFilter.options ?? []}
            onChange={selected => {
              filters.productTypesFilter.setValue(selected);
            }}
          />
        </div>

        {!Boolean(siteConfig.tags.length) && (
          <div className="space-y-4">
            <h1 className="text-xl font-bold lg:text-xl ">
              Tags{' '}
              {filters.tagsFilter?.options &&
                `(${filters.tagsFilter.options.length})`}
            </h1>
            <CheckboxGrid
              isLoading={isLoading}
              selected={filters.tagsFilter.value}
              options={filters.tagsFilter.options ?? []}
              onChange={selected => {
                filters.tagsFilter.setValue(selected);
              }}
            />
          </div>
        )}

        <div className="flex flex-col items-start gap-12 pt-4 lg:flex-row">
          <div className="flex w-full flex-col gap-4">
            <ProfileListSearch filters={filters} />
            <div className="flex flex-col gap-4 md:flex-row">
              <ProfileListFilters filters={filters} />
              <ProfileListFiltersLabel filters={filters} />
            </div>
          </div>

          <div className="flex w-full flex-col items-end gap-4 md:w-fit md:flex-row md:justify-start">
            <ProfileListSorting sorting={sorting} />
            {siteConfig.displayQueries && (
              <QueryDialogButton
                queryDocument={SearchProfilesDocument}
                variables={query}
                buttonLabel="View query"
              />
            )}
          </div>
        </div>
        <ProfileListCards query={query} />
      </div>
    </div>
  );
};
