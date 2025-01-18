import { CProfileInfosBoolExp } from '@/lib/graphql/generated/graphql';
import { useRef } from 'react';
import deepmerge from 'deepmerge';
import type {
  SearchReturn,
  MultiSelectReturn,
  RangeReturn
} from './use-filter';

import {
  useAssetTypeFilter,
  useAssetTickerFilter,
  useAssetDeployedOnFilter,
  useAssetStandardFilter,
  useEntityTypeFilter,
  useEntityNameFilter,
  useEntityCountryFilter,
  useSearchFilter,
  useTagsFilter,
  useProductTypesFilter,
  useProductStatusFilter,
  useSupportsProductsFilter,
  useProductDeployedOnFilter,
  useProductLaunchDateFilter,
  useProfileTypeFilter,
  useProfileSectorsFilter,
  useProfileStatusesFilter,
  useProfileFoundingDateFilter,
  useProductAssetRelationshipsFilter
} from './filters/filter-definitions';

export type FiltersStore = {
  searchFilter: SearchReturn['value'];
  profileTypeFilter: MultiSelectReturn<string, string>['value'];
  profileSectorsFilter: MultiSelectReturn<string, string>['value'];
  profileStatusesFilter: MultiSelectReturn<string, string>['value'];
  profileFoundingDateFilter: RangeReturn<string>['value'];
  productStatusFilter: MultiSelectReturn<string, string>['value'];
  productTypesFilter: MultiSelectReturn<string, string>['value'];
  productLaunchDateFilter: RangeReturn<string>['value'];
  supportsProductsFilter: MultiSelectReturn<string, string>['value'];
  productDeployedOnFilter: MultiSelectReturn<string, string>['value'];
  assetTypeFilter: MultiSelectReturn<string, string>['value'];
  assetTickerFilter: MultiSelectReturn<string, string>['value'];
  assetDeployedOnFilter: MultiSelectReturn<string, string>['value'];
  assetStandardFilter: MultiSelectReturn<string, string>['value'];
  entityTypeFilter: MultiSelectReturn<string, string>['value'];
  entityNameFilter: MultiSelectReturn<string, string>['value'];
  entityCountryFilter: MultiSelectReturn<string, string>['value'];
  tagsFilter: MultiSelectReturn<string, string>['value'];
  productAssetRelationshipsFilter: MultiSelectReturn<string, string>['value'];
};

export type Filters = ReturnType<typeof useProfileFilters>;

export function useProfileFilters() {
  // This ref holds references to all filters so that within each filter's "getOptions",
  // we can build cross-dependent queries.
  const filtersRef = useRef<FiltersStore>({} as FiltersStore);
  const filterStore = filtersRef.current;

  const filters = {
    searchFilter: useSearchFilter(),
    profileTypeFilter: useProfileTypeFilter(filterStore),
    profileSectorsFilter: useProfileSectorsFilter(filterStore),
    profileStatusesFilter: useProfileStatusesFilter(filterStore),
    profileFoundingDateFilter: useProfileFoundingDateFilter(),
    productStatusFilter: useProductStatusFilter(filterStore),
    productTypesFilter: useProductTypesFilter(filterStore),
    productLaunchDateFilter: useProductLaunchDateFilter(),
    supportsProductsFilter: useSupportsProductsFilter(filterStore),
    productDeployedOnFilter: useProductDeployedOnFilter(filterStore),
    assetTypeFilter: useAssetTypeFilter(filterStore),
    assetTickerFilter: useAssetTickerFilter(filterStore),
    assetDeployedOnFilter: useAssetDeployedOnFilter(filterStore),
    assetStandardFilter: useAssetStandardFilter(filterStore),
    entityTypeFilter: useEntityTypeFilter(filterStore),
    entityNameFilter: useEntityNameFilter(filterStore),
    entityCountryFilter: useEntityCountryFilter(filterStore),
    tagsFilter: useTagsFilter(filterStore),
    productAssetRelationshipsFilter:
      useProductAssetRelationshipsFilter(filterStore)
  };

  filtersRef.current = Object.entries(filters).reduce(
    (acc, [key, filter]) => ({
      ...acc,
      [key]: filter.value
    }),
    {} as FiltersStore
  );

  // Merge each filter's conditions into a final "where" object.
  const toQueryWhereFields = (): CProfileInfosBoolExp => {
    const conditions = Object.values(filters)
      .map(filter => filter.getQueryConditions?.())
      .filter((condition): condition is CProfileInfosBoolExp =>
        Boolean(condition)
      );

    return deepmerge.all<CProfileInfosBoolExp>(
      conditions as CProfileInfosBoolExp[]
    );
  };

  return {
    filters,
    toQueryWhereFields
  };
}
