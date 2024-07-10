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
import {
  SearchProfilesDocument,
  SearchProfilesQueryVariables
} from '@/lib/graphql/generated-graphql';
import { siteConfig } from '@/lib/site-config';

const defaultWhereFilter = {
  _or: [],
  _and: [
    {
      products: {
        supportsProducts: {
          supportsProductId: {
            _in: siteConfig.filterByProductIds
          }
        }
      }
    },
    {
      products: {
        deployedOnProductId: {
          _in: siteConfig.filterByProductIds
        }
      }
    },
    {
      products: {
        id: {
          _in: siteConfig.filterByProductIds
        }
      }
    },
    {
      assets: {
        deployedOnProductId: {
          _in: siteConfig.filterByProductIds
        }
      }
    }
  ]
};

const withDefaultWhereFilter = (
  query: SearchProfilesQueryVariables['where']
) => {
  if (siteConfig.filterByProductIds?.length < 1) return query;

  if (query?._or && defaultWhereFilter?._or) {
    query._or = [...query._or, ...defaultWhereFilter._or];
  }
  if (query?._and && defaultWhereFilter._and) {
    query._and = [...query._and, ...defaultWhereFilter._and];
  }
  return query;
};

export const ProfileList = () => {
  const { filters, toQueryWhereFields, filtersVisibility } =
    useProfileFilters();
  const { sorting, toQuerySortByFields } = useProfileSorting();
  const query = {
    where: withDefaultWhereFilter(toQueryWhereFields()),
    order_by: [toQuerySortByFields()],
    limit: 10,
    offset: 0
  };

  return (
    <div className="w-full space-y-4">
      <div className="container space-y-4">
        <div className="flex-1">
          <ProfileListSearch
            filtersVisibility={filtersVisibility}
            filters={filters}
          />
        </div>
      </div>
      <ProfileListFilters
        filtersVisibility={filtersVisibility}
        filters={filters}
      />

      <div className="container space-y-4 md:space-y-2">
        <div className="flex flex-col items-end justify-end gap-4 md:mt-0 md:flex-row">
          <ProfileListFiltersLabel filters={filters} />
          <ProfileListSorting sorting={sorting} />
          <QueryDialogButton
            queryDocument={SearchProfilesDocument}
            variables={query}
            buttonLabel="View query"
          />
        </div>

        <ProfileListCards query={query} />
      </div>
    </div>
  );
};
