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
import { useState } from 'react';
import { isNotEmpty } from '@/lib/utils/is-not-empty';

export type Filters = ReturnType<typeof useProfileFilters>;

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
  const [tags, setTags] = useState<number[] | null>(queryParams.tags);

  const { data, isLoading } = useGetFiltersOptionsQuery(
    {
      productSupportsWhere: {
        ...(isNotEmpty(siteConfig.blockchainIds) && {
          supportsProductId: { _in: siteConfig.blockchainIds }
        })
      },
      productTypesWhere: {
        ...((isNotEmpty(tags) || isNotEmpty(siteConfig.tags)) && {
          products: {
            profile: {
              profileTags: {
                tagId: {
                  _in: [...(tags || []), ...(siteConfig.tags || [])]
                }
              }
            }
          }
        })
      },
      deployedOnProductsWhere: {
        ...(isNotEmpty(siteConfig.blockchainIds) && {
          deployedOnProductId: { _in: siteConfig.blockchainIds }
        }),
        _or: [
          {
            ...(isNotEmpty(siteConfig.blockchainProductTypeIds) && {
              productTypeId: {
                _in: siteConfig.blockchainProductTypeIds
              }
            })
          }
        ]
      }
    },
    { placeholderData: prevData => prevData }
  );

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
    onChange: newValue => {
      setQueryParams({ tags: newValue });
      setTags(newValue);
    }
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
    const searchConditions = isNotEmpty(searchFilter?.value)
      ? [
          ...(searchFilter.config?.fields?.productName
            ? [
                { name: { _ilike: `%${searchFilter.value}%` } },
                { products: { name: { _ilike: `%${searchFilter.value}%` } } }
              ]
            : [])
        ]
      : [];

    const profileConditions = {
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
      })
    };

    const productConditions = {
      ...(isNotEmpty(productTypesFilter.value) && {
        productTypeId: { _in: productTypesFilter.value }
      }),
      ...(isNotEmpty(productStatusFilter.value) && {
        productStatus: { id: { _in: productStatusFilter.value } }
      }),
      ...(isNotEmpty(productDeployedOnFilter.value) && {
        deployedOnProductId: { _in: productDeployedOnFilter.value }
      }),
      ...(isNotEmpty(productSupportsFilter.value) && {
        supportsProducts: {
          supportsProductId: { _in: productSupportsFilter.value }
        }
      }),
      ...(productLaunchDateFilter.value?.every?.(i => i) && {
        launchDate: {
          _gte: productLaunchDateFilter.value[0],
          _lte: productLaunchDateFilter.value[1]
        }
      })
    };

    const assetConditions = {
      ...(isNotEmpty(assetTypeFilter.value) && {
        assetTypeId: { _in: assetTypeFilter.value }
      }),
      ...(isNotEmpty(assetTickerFilter.value) && {
        ticker: { _in: assetTickerFilter.value }
      }),
      ...(isNotEmpty(assetDeployedOnFilter.value) && {
        assetDeployedOnProductId: {
          id: { _in: assetDeployedOnFilter.value }
        }
      }),
      ...(isNotEmpty(assetStandardFilter.value) && {
        assetStandardId: { _in: assetStandardFilter.value }
      })
    };

    const entityConditions = {
      ...(isNotEmpty(entityTypeFilter.value) && {
        entityTypeId: { _in: entityTypeFilter.value }
      }),
      ...(isNotEmpty(entityNameFilter.value) && {
        id: { _in: entityNameFilter.value }
      }),
      ...(isNotEmpty(entityCountryFilter.value) && {
        countryId: { _in: entityCountryFilter.value }
      })
    };

    return {
      /*************************************
       * SEARCH FILTERS
       *************************************/
      ...(searchConditions.length > 0 && { _or: searchConditions }),

      /*************************************
       * PROFILE FILTERS
       *************************************/
      ...(Object.keys(profileConditions).length > 0 && profileConditions),

      /*************************************
       * PRODUCT FILTERS
       *************************************/
      ...(Object.keys(productConditions).length > 0 && {
        products: productConditions
      }),

      /*************************************
       * ASSET FILTERS
       *************************************/
      ...(Object.keys(assetConditions).length > 0 && {
        assets: assetConditions
      }),

      /*************************************
       * ENTITY FILTERS
       *************************************/
      ...(Object.keys(entityConditions).length > 0 && {
        entities: entityConditions
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
