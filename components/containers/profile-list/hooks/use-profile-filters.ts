import {
  SearchProfilesQueryVariables,
  useGetFiltersOptionsQuery
} from '@/lib/graphql/generated-graphql';
import {
  useQueryStates,
  parseAsArrayOf,
  parseAsInteger,
  parseAsString
} from 'nuqs';
import { useFilter } from './use-filter';
import { siteConfig } from '@/lib/site-config';

export type Filters = ReturnType<typeof useProfileFilters>;

const isNotEmpty = (
  value: string | number | Array<string | number> | null
): value is string | number | Array<string | number> => {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== null && value !== undefined;
};

export const useProfileFilters = () => {
  const [queryParams, setQueryParams] = useQueryStates(
    {
      productTypes: parseAsArrayOf(parseAsInteger).withDefault([]),
      tags: parseAsArrayOf(parseAsInteger).withDefault([]),
      search: parseAsString.withDefault(''),
      profileType: parseAsArrayOf(parseAsInteger).withDefault([]),
      profileSectors: parseAsArrayOf(parseAsInteger).withDefault([]),
      profileStatuses: parseAsArrayOf(parseAsInteger).withDefault([]),
      profileFoundingDate: parseAsArrayOf(parseAsString),
      productStatus: parseAsArrayOf(parseAsInteger).withDefault([]),
      productSupports: parseAsArrayOf(parseAsInteger).withDefault([]),
      productLaunchDate: parseAsArrayOf(parseAsString),
      productDeployedOn: parseAsArrayOf(parseAsInteger).withDefault([]),
      assetType: parseAsArrayOf(parseAsInteger).withDefault([]),
      assetTicker: parseAsArrayOf(parseAsString).withDefault([]),
      assetDeployedOn: parseAsArrayOf(parseAsInteger).withDefault([]),
      assetStandard: parseAsArrayOf(parseAsInteger).withDefault([]),
      entityType: parseAsArrayOf(parseAsInteger).withDefault([]),
      entityName: parseAsArrayOf(parseAsInteger).withDefault([]),
      entityCountry: parseAsArrayOf(parseAsInteger).withDefault([])
    },
    { clearOnDefault: true, throttleMs: 1000 }
  );

  const { data, isLoading } = useGetFiltersOptionsQuery({
    productSupportsWhere: {
      ...(siteConfig.blockchainIds?.length > 0 && {
        supportsProductId: { _in: siteConfig.blockchainIds }
      })
    },
    deployedOnProductsWhere: {
      ...(siteConfig.blockchainIds?.length > 0 && {
        deployedOnProductId: { _in: siteConfig.blockchainIds }
      }),
      _or: [
        {
          ...(siteConfig.blockchainProductTypeIds?.length > 0 && {
            productTypeId: {
              _in: siteConfig.blockchainProductTypeIds
            }
          })
        }
      ]
    }
  });

  /*************************************
   * CHECKBOX GRID FILTERS
   *************************************/
  const productTypesFilter = useFilter<number>({
    options: data?.productTypes.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.productTypes,
    onChange: newValue => setQueryParams({ productTypes: newValue })
  });

  const tagsFilter = useFilter<number>({
    options: data?.tags.map(item => ({
      value: item.id,
      label: item.name,
      description: item.description
    })),
    type: 'multiselect',
    initialValue: queryParams.tags,
    onChange: newValue => setQueryParams({ tags: newValue })
  });

  /*************************************
   * SEARCH FILTERS
   *************************************/
  const searchFilter = useFilter<{
    fields: {
      profileName: boolean;
      productName: boolean;
    };
  }>({
    type: 'search',
    initialValue: queryParams.search,
    config: {
      fields: {
        profileName: true,
        productName: true
      }
    },
    onChange: newValue => setQueryParams({ search: newValue })
  });

  /*************************************
   * PROFILE FILTERS
   *************************************/
  const profileTypeFilter = useFilter<number>({
    options: data?.profileTypes.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.profileType,
    onChange: newValue => setQueryParams({ profileType: newValue })
  });

  const profileSectorsFilter = useFilter<number>({
    options: data?.profileSectors.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.profileSectors,
    onChange: newValue => setQueryParams({ profileSectors: newValue })
  });

  const profileStatusesFilter = useFilter<number>({
    options: data?.profileStatuses.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.profileStatuses,
    onChange: newValue => setQueryParams({ profileStatuses: newValue })
  });

  const profileFoundingDateFilter = useFilter<string>({
    type: 'range',
    initialValue: queryParams.profileFoundingDate as [string, string] | null,
    onChange: newValue => setQueryParams({ profileFoundingDate: newValue })
  });

  /*************************************
   * PRODUCT FILTERS
   *************************************/
  const productStatusFilter = useFilter<number>({
    options: data?.productStatus.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.productStatus,
    onChange: newValue => setQueryParams({ productStatus: newValue })
  });

  const productSupportsFilter = useFilter<number>({
    //@todo: we are filtering products by distinct id in the FE, we might wanna move this to the query but is not supported at the moment
    options: Array.from(
      new Map(
        data?.productSupports
          .map(item => ({
            value: item.supports.id,
            label: item.supports.name,
            description: item.supports.descriptionShort
          }))
          .map(option => [option.value, option])
      ).values()
    ),
    type: 'multiselect',
    initialValue: queryParams.productSupports,
    onChange: newValue => setQueryParams({ productSupports: newValue })
  });

  const productLaunchDateFilter = useFilter<string>({
    type: 'range',
    initialValue: queryParams.productLaunchDate as [string, string] | null,
    onChange: newValue => setQueryParams({ productLaunchDate: newValue })
  });

  const productDeployedOnFilter = useFilter<number>({
    options: data?.deployedOnProducts.map(item => ({
      value: item.id,
      label: item.name,
      description: item.descriptionShort
    })),
    type: 'multiselect',
    initialValue: queryParams.productDeployedOn,
    onChange: newValue => setQueryParams({ productDeployedOn: newValue })
  });

  /*************************************
   * ASSET FILTERS
   *************************************/
  const assetTypeFilter = useFilter<number>({
    options: data?.assetType.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.assetType,
    onChange: newValue => setQueryParams({ assetType: newValue })
  });

  const assetTickerFilter = useFilter<string>({
    options: data?.assets
      .map(item => item.ticker)
      .filter(ticker => ticker && ticker !== '')
      .map(ticker => ({
        value: ticker,
        label: ticker,
        description: null
      })),
    type: 'multiselect',
    initialValue: queryParams.assetTicker,
    onChange: newValue => setQueryParams({ assetTicker: newValue })
  });

  const assetDeployedOnFilter = useFilter<number>({
    options: data?.deployedOnProducts.map(item => ({
      value: item.id,
      label: item.name,
      description: item.descriptionShort
    })),
    type: 'multiselect',
    initialValue: queryParams.assetDeployedOn,
    onChange: newValue => setQueryParams({ assetDeployedOn: newValue })
  });

  const assetStandardFilter = useFilter<number>({
    options: data?.assetStandardSupport.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.assetStandard,
    onChange: newValue => setQueryParams({ assetStandard: newValue })
  });

  /*************************************
   * ENTITY FILTERS
   *************************************/
  const entityTypeFilter = useFilter<number>({
    options: data?.entityTypes.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: queryParams.entityType,
    onChange: newValue => setQueryParams({ entityType: newValue })
  });

  const entityNameFilter = useFilter<number>({
    options: data?.entities.map(item => ({
      value: item.id,
      label: item.name,
      description: null
    })),
    type: 'multiselect',
    initialValue: queryParams.entityName,
    onChange: newValue => setQueryParams({ entityName: newValue })
  });

  const entityCountryFilter = useFilter<number>({
    options: data?.countries.map(item => ({
      value: item.id,
      label: item.name,
      description: null
    })),
    type: 'multiselect',
    initialValue: queryParams.entityCountry,
    onChange: newValue => setQueryParams({ entityCountry: newValue })
  });

  const toQueryWhereFields = () => {
    return {
      /*************************************
       * SEARCH FILTERS
       *************************************/
      ...(isNotEmpty(searchFilter?.value) && {
        _or: [
          ...(searchFilter.config?.fields?.productName
            ? [
                { name: { _ilike: `%${searchFilter.value}%` } },
                { products: { name: { _ilike: `%${searchFilter.value}%` } } }
              ]
            : [])
        ]
      }),

      /*************************************
       * PROFILE FILTERS
       *************************************/
      ...(isNotEmpty(profileTypeFilter.value) && {
        profileType: { id: { _in: profileTypeFilter.value } }
      }),
      ...(isNotEmpty(profileSectorsFilter.value) && {
        profileSector: { id: { _in: profileSectorsFilter.value } }
      }),
      ...(isNotEmpty(profileStatusesFilter.value) && {
        profileStatus: { id: { _in: profileStatusesFilter.value } }
      }),
      ...(profileFoundingDateFilter.value?.every?.(i => i) && {
        foundingDate: {
          _gte: profileFoundingDateFilter.value[0],
          _lte: profileFoundingDateFilter.value[1]
        }
      }),
      /*************************************
       * PRODUCT FILTERS
       *************************************/
      ...(isNotEmpty(productTypesFilter.value) && {
        products: { productTypeId: { _in: productTypesFilter.value } }
      }),
      ...(isNotEmpty(productStatusFilter.value) && {
        products: {
          productStatus: { id: { _in: productStatusFilter.value } }
        }
      }),
      ...(isNotEmpty(productDeployedOnFilter.value) && {
        products: {
          deployedOnProductId: { _in: productDeployedOnFilter.value }
        }
      }),
      ...(isNotEmpty(productSupportsFilter.value) && {
        products: {
          supportsProducts: {
            supportsProductId: { _in: productSupportsFilter.value }
          }
        }
      }),
      ...(productLaunchDateFilter.value?.every?.(i => i) && {
        foundingDate: {
          _gte: productLaunchDateFilter.value[0],
          _lte: productLaunchDateFilter.value[1]
        }
      }),
      /*************************************
       * ASSET FILTERS
       *************************************/
      ...(isNotEmpty(assetTypeFilter.value) && {
        assets: { assetTypeId: { _in: assetTypeFilter.value } }
      }),
      ...(isNotEmpty(assetTickerFilter.value) && {
        assets: {
          ticker: { _in: assetTickerFilter.value }
        }
      }),
      ...(isNotEmpty(assetDeployedOnFilter.value) && {
        assets: {
          assetDeployedOnProductId: {
            id: { _in: assetDeployedOnFilter.value }
          }
        }
      }),
      ...(isNotEmpty(assetStandardFilter.value) && {
        assets: { assetStandardId: { _in: assetStandardFilter.value } }
      }),
      /*************************************
       * ENTITY FILTERS
       *************************************/
      ...(isNotEmpty(entityTypeFilter.value) && {
        entities: { entityTypeId: { _in: entityTypeFilter.value } }
      }),
      ...(isNotEmpty(entityNameFilter.value) && {
        entities: { id: { _in: entityNameFilter.value } }
      }),
      ...(isNotEmpty(entityCountryFilter.value) && {
        entities: { countryId: { _in: entityCountryFilter.value } }
      }),
      /*************************************
       * TAGS FILTERS
       *************************************/
      ...(isNotEmpty(tagsFilter.value) && {
        profileTags: { tagId: { _in: tagsFilter.value } }
      })
    } satisfies SearchProfilesQueryVariables['where'];
  };

  return {
    isLoading,
    filters: {
      searchFilter,
      profileTypeFilter,
      profileSectorsFilter,
      profileStatusesFilter,
      profileFoundingDateFilter,
      productStatusFilter,
      productTypesFilter,
      productLaunchDateFilter,
      productSupportsFilter,
      productDeployedOnFilter,
      assetTypeFilter,
      assetTickerFilter,
      assetDeployedOnFilter,
      assetStandardFilter,
      entityTypeFilter,
      entityNameFilter,
      entityCountryFilter,
      tagsFilter
    },
    toQueryWhereFields
  };
};
