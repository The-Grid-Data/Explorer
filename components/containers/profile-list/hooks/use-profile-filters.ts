import {
  SearchProfilesQueryVariables,
  useGetFiltersOptionsQuery
} from '@/lib/graphql/generated-graphql';

import { useFilter } from './use-filter';
import { siteConfig } from '@/lib/site-config';

export type Filters = ReturnType<typeof useProfileFilters>;

export const useProfileFilters = () => {
  const { data } = useGetFiltersOptionsQuery({
    productSupports: {
      ...(siteConfig.blockchainIds?.length > 0 && {
        supportsProductId: { _in: siteConfig.blockchainIds }
      })
    },
    deployedOnProducts: {
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
    initialValue: []
  });

  const tagsFilter = useFilter<number>({
    options: data?.tags.map(item => ({
      value: item.id,
      label: item.name,
      description: item.description
    })),
    type: 'multiselect',
    initialValue: []
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
    initialValue: '',
    config: {
      fields: {
        profileName: true,
        productName: true
      }
    }
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
    initialValue: []
  });

  const profileSectorsFilter = useFilter<number>({
    options: data?.profileSectors.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: []
  });

  const profileStatusesFilter = useFilter<number>({
    options: data?.profileStatuses.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: []
  });

  const profileFoundingDateFilter = useFilter<string | null>({
    type: 'range',
    initialValue: [null, null]
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
    initialValue: []
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
    initialValue: []
  });

  const productLaunchDateFilter = useFilter<string | null>({
    type: 'range',
    initialValue: [null, null]
  });

  const productDeployedOnFilter = useFilter<number>({
    options: data?.deployedOnProducts.map(item => ({
      value: item.id,
      label: item.name,
      description: item.descriptionShort
    })),
    type: 'multiselect',
    initialValue: []
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
    initialValue: []
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
    initialValue: []
  });

  const assetDeployedOnFilter = useFilter<number>({
    options: data?.deployedOnProducts.map(item => ({
      value: item.id,
      label: item.name,
      description: item.descriptionShort
    })),
    type: 'multiselect',
    initialValue: []
  });

  const assetStandardFilter = useFilter<number>({
    options: data?.assetStandardSupport.map(item => ({
      value: item.id,
      label: item.name,
      description: item.definition
    })),
    type: 'multiselect',
    initialValue: []
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
    initialValue: []
  });

  const entityNameFilter = useFilter<number>({
    options: data?.entities.map(item => ({
      value: item.id,
      label: item.name,
      description: null
    })),
    type: 'multiselect',
    initialValue: []
  });

  const entityCountryFilter = useFilter<number>({
    options: data?.countries.map(item => ({
      value: item.id,
      label: item.name,
      description: null
    })),
    type: 'multiselect',
    initialValue: []
  });

  const toQueryWhereFields = () => {
    return {
      /*************************************
       * SEARCH FILTERS
       *************************************/
      ...(searchFilter.value.length > 0 && {
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
      ...(profileTypeFilter.value.length > 0 && {
        profileType: { id: { _in: profileTypeFilter.value } }
      }),
      ...(profileSectorsFilter.value.length > 0 && {
        profileSector: { id: { _in: profileSectorsFilter.value } }
      }),
      ...(profileStatusesFilter.value.length > 0 && {
        profileStatus: { id: { _in: profileStatusesFilter.value } }
      }),
      ...(profileFoundingDateFilter.value.every(i => i) && {
        foundingDate: {
          _gte: profileFoundingDateFilter.value[0],
          _lte: profileFoundingDateFilter.value[1]
        }
      }),
      /*************************************
       * PRODUCT FILTERS
       *************************************/
      ...(productTypesFilter.value.length > 0 && {
        products: { productTypeId: { _in: productTypesFilter.value } }
      }),
      ...(productStatusFilter.value.length > 0 && {
        products: {
          productStatus: { id: { _in: productStatusFilter.value } }
        }
      }),
      ...(productDeployedOnFilter.value.length > 0 && {
        products: {
          deployedOnProductId: { _in: productDeployedOnFilter.value }
        }
      }),
      ...(productSupportsFilter.value.length > 0 && {
        products: {
          supportsProducts: {
            supportsProductId: { _in: productSupportsFilter.value }
          }
        }
      }),
      ...(productLaunchDateFilter.value.every(i => i) && {
        foundingDate: {
          _gte: productLaunchDateFilter.value[0],
          _lte: productLaunchDateFilter.value[1]
        }
      }),
      /*************************************
       * ASSET FILTERS
       *************************************/
      ...(assetTypeFilter.value.length > 0 && {
        assets: { assetTypeId: { _in: assetTypeFilter.value } }
      }),
      ...(assetTickerFilter.value.length > 0 && {
        assets: {
          ticker: { _in: assetTickerFilter.value }
        }
      }),
      ...(assetDeployedOnFilter.value.length > 0 && {
        assets: {
          assetDeployedOnProductId: {
            id: { _in: assetDeployedOnFilter.value }
          }
        }
      }),
      ...(assetStandardFilter.value.length > 0 && {
        assets: { assetStandardId: { _in: assetStandardFilter.value } }
      }),
      /*************************************
       * ENTITY FILTERS
       *************************************/
      ...(entityTypeFilter.value.length > 0 && {
        entities: { entityTypeId: { _in: entityTypeFilter.value } }
      }),
      ...(entityNameFilter.value.length > 0 && {
        entities: { id: { _in: entityNameFilter.value } }
      }),
      ...(entityCountryFilter.value.length > 0 && {
        entities: { countryId: { _in: entityCountryFilter.value } }
      }),
      /*************************************
       * TAGS FILTERS
       *************************************/
      ...(tagsFilter.value.length > 0 && {
        profileTags: { tagId: { _in: tagsFilter.value } }
      })
    } satisfies SearchProfilesQueryVariables['where'];
  };

  return {
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
