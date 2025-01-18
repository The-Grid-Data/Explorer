import { CProfileInfosBoolExp } from '@/lib/graphql/generated/graphql';
import { useQueryStates, parseAsArrayOf, parseAsString } from 'nuqs';
import { useFilter } from './use-filter';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { siteConfig } from '@/lib/site-config';
import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';
import { z } from 'zod';
import { createParser } from 'nuqs';
import { useRef } from 'react';
import deepmerge from 'deepmerge';

const validateAndFormatOptions = <T>(options: unknown) => {
  const optionsSchema = z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().nullable().optional()
    })
  );

  const result = optionsSchema.safeParse(options);
  const validatedOptions = result.success ? result.data : [];
  return validatedOptions.filter(item => item.label?.trim());
};

const parseAsId = createParser({
  parse(queryValue) {
    if (!queryValue) return null;
    try {
      const decoded = decodeURIComponent(queryValue);
      return decoded;
    } catch {
      return null;
    }
  },
  serialize(value) {
    if (!value) return '';
    return encodeURIComponent(value.toString());
  }
});

/**
 * Helper to build a merged "where" condition across all multiselect filters,
 * so that each filter's options change according to other filters' selections.
 */
function buildMultiselectWhere(
  filters?: Filters['filters']
): CProfileInfosBoolExp {
  // Collect conditions from each filter that has type “multiselect.”
  const conditions = Object.values(filters ?? {})
    .filter(f => f.type === 'multiselect')
    .map(f => f.getOptionsQueryConditions?.() || {})
    .filter(Boolean);

  // Deep-merge them into a single combined where object.
  return deepmerge.all<CProfileInfosBoolExp>(
    conditions as CProfileInfosBoolExp[]
  );
}

export type Filters = ReturnType<typeof useProfileFilters>;

export function useProfileFilters() {
  const [queryParams, setQueryParams] = useQueryStates(
    {
      productTypes: parseAsArrayOf(parseAsId).withDefault([]),
      tags: parseAsArrayOf(parseAsId).withDefault([]),
      search: parseAsString.withDefault(''),
      profileType: parseAsArrayOf(parseAsId).withDefault([]),
      profileSectors: parseAsArrayOf(parseAsId).withDefault([]),
      profileStatuses: parseAsArrayOf(parseAsId).withDefault([]),
      profileFoundingDate: parseAsArrayOf(parseAsString),
      productStatus: parseAsArrayOf(parseAsId).withDefault([]),
      productSupports: parseAsArrayOf(parseAsId).withDefault([]),
      productLaunchDate: parseAsArrayOf(parseAsString),
      productDeployedOn: parseAsArrayOf(parseAsId).withDefault([]),
      assetType: parseAsArrayOf(parseAsId).withDefault([]),
      assetTicker: parseAsArrayOf(parseAsId).withDefault([]),
      assetDeployedOn: parseAsArrayOf(parseAsId).withDefault([]),
      assetStandard: parseAsArrayOf(parseAsId).withDefault([]),
      entityType: parseAsArrayOf(parseAsId).withDefault([]),
      entityName: parseAsArrayOf(parseAsId).withDefault([]),
      entityCountry: parseAsArrayOf(parseAsId).withDefault([])
    },
    { clearOnDefault: true, throttleMs: 1000 }
  );

  // This ref holds references to all filters so that within each filter's "getOptions",
  // we can build cross-dependent queries. We type it as record of FilterInstance.
  const filtersRef = useRef<Filters['filters']>();

  /*************************************
   * CHECKBOX GRID FILTERS
   *************************************/
  const productTypesFilter = useFilter<string, string>({
    id: 'productTypes',
    type: 'multiselect',
    optionsQueryDeps: [queryParams],
    initialValue: queryParams.productTypes,
    onChange: newValue => setQueryParams({ productTypes: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getProductTypeOptions($where: CProductTypesBoolExp) {
            productTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.productTypes);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productTypeId: { _in: value }
        }
      }
    })
  });

  const tagsFilter = useFilter<string, string>({
    id: 'tags',
    type: 'multiselect',
    optionsQueryDeps: [queryParams],
    initialValue: queryParams.tags,
    onChange: newValue => setQueryParams({ tags: newValue }),
    getOptions: async () => {
      const { tagsFilter, ...others } = filtersRef.current as any;
      const where = buildMultiselectWhere(others);
      const data = await execute(
        graphql(`
          query getTagsOptions($where: CTagsBoolExp) {
            tags(where: $where) {
              value: id
              label: name
              description
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.tags);
    },
    getQueryConditions: value => ({
      root: {
        profileTags: { tagId: { _in: value } }
      }
    }),
    getOptionsQueryConditions: value => ({
      products: {
        root: {
          profileInfos: {
            root: { profileTags: { tagId: { _in: value } } }
          }
        }
      }
    })
  });

  /*************************************
   * SEARCH FILTERS
   *************************************/
  const searchFilter = useFilter({
    id: 'search',
    type: 'search',
    initialValue: queryParams.search,
    onChange: newValue => setQueryParams({ search: newValue }),
    getQueryConditions: value => ({
      _or: [
        { name: { _like: `%${value}%` } },
        {
          root: {
            products: {
              name: { _like: `%${value}%` }
            }
          }
        }
      ]
    })
  });

  /*************************************
   * PROFILE FILTERS
   *************************************/
  const profileTypeFilter = useFilter<string, string>({
    id: 'profileType',
    type: 'multiselect',
    initialValue: queryParams.profileType,
    onChange: newValue => setQueryParams({ profileType: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getProfileTypeOptions($where: CProfileTypesBoolExp) {
            profileTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.profileTypes);
    },
    getQueryConditions: value => ({
      profileType: { id: { _in: value } }
    })
  });

  const profileSectorsFilter = useFilter<string, string>({
    id: 'profileSectors',
    type: 'multiselect',
    initialValue: queryParams.profileSectors,
    optionsQueryDeps: [queryParams],
    onChange: newValue => setQueryParams({ profileSectors: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      console.log('where', where);
      const data = await execute(
        graphql(`
          query getProfileSectorsOptions($where: CProfileSectorsBoolExp) {
            profileSectors(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.profileSectors);
    },
    getQueryConditions: value => ({
      profileSector: { id: { _in: value } }
    })
  });

  const profileStatusesFilter = useFilter<string, string>({
    id: 'profileStatuses',
    type: 'multiselect',
    initialValue: queryParams.profileStatuses,
    onChange: newValue => setQueryParams({ profileStatuses: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getProfileStatusesOptions($where: CProfileStatusesBoolExp) {
            profileStatuses(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.profileStatuses);
    },
    getQueryConditions: value => ({
      profileStatus: { id: { _in: value } }
    })
  });

  const profileFoundingDateFilter = useFilter<string>({
    id: 'profileFoundingDate',
    type: 'range',
    initialValue: queryParams.profileFoundingDate as [string, string] | null,
    onChange: newValue => setQueryParams({ profileFoundingDate: newValue }),
    getQueryConditions: value => ({
      foundingDate: {
        _gte: value[0],
        _lte: value[1]
      }
    })
  });

  /*************************************
   * PRODUCT FILTERS
   *************************************/
  const productStatusFilter = useFilter<string, string>({
    id: 'productStatus',
    type: 'multiselect',
    initialValue: queryParams.productStatus,
    onChange: newValue => setQueryParams({ productStatus: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getProductStatusesOptions($where: CProductStatusesBoolExp) {
            productStatuses(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.productStatuses);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productStatus: { id: { _in: value } }
        }
      }
    })
  });

  const supportsProductsFilter = useFilter<string, string>({
    id: 'supportsProducts',
    type: 'multiselect',
    initialValue: queryParams.productSupports,
    onChange: newValue => setQueryParams({ productSupports: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getSupportsProductsOptions(
            $supportsProductsWhere: CSupportsProductsBoolExp
            $where: CProductsBoolExp
          ) {
            supportsProducts(where: $supportsProductsWhere) {
              supportsProduct {
                name
                id
                description
              }
            }
            products(where: $where) {
              # If you need more product data for other merges
              id
            }
          }
        `),
        {
          supportsProductsWhere: {
            ...(isNotEmpty(siteConfig.blockchainIds) && {
              supportsProduct: {
                id: { _in: siteConfig.blockchainIds }
              }
            })
          },
          where
        }
      );
      const options = Array.from(
        new Map(
          (data?.supportsProducts ?? [])
            .map(item => ({
              value: item.supportsProduct?.id,
              label: item.supportsProduct?.name ?? ' - ',
              description: item.supportsProduct?.description ?? ' - '
            }))
            .map(option => [option.value, option])
        ).values()
      );
      return validateAndFormatOptions(options);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          supportsProducts: {
            supportsProductId: { _in: value }
          }
        }
      }
    })
  });

  const productAssetRelationshipsFilter = useFilter<string, string>({
    id: 'productAssetRelationships',
    type: 'multiselect',
    initialValue: queryParams.productStatus,
    onChange: newValue => setQueryParams({ productStatus: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getAssetTickerOptions($where: CAssetsBoolExp) {
            assets(where: $where) {
              ticker
            }
          }
        `),
        { where }
      );
      const options = data?.assets
        ?.map(item => item.ticker)
        .filter(ticker => ticker && ticker !== '')
        .map(ticker => ({
          value: ticker,
          label: ticker,
          description: null
        }));
      return validateAndFormatOptions(options);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productAssetRelationships: { asset: { ticker: { _in: value } } }
        }
      }
    })
  });

  const productLaunchDateFilter = useFilter<string>({
    id: 'productLaunchDate',
    type: 'range',
    initialValue: queryParams.productLaunchDate as [string, string] | null,
    onChange: newValue => setQueryParams({ productLaunchDate: newValue }),
    getQueryConditions: value => ({
      root: {
        products: {
          launchDate: {
            _gte: value[0],
            _lte: value[1]
          }
        }
      }
    })
  });

  const productDeployedOnFilter = useFilter<string, string>({
    id: 'productDeployedOn',
    type: 'multiselect',
    initialValue: queryParams.productDeployedOn,
    onChange: newValue => setQueryParams({ productDeployedOn: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getDeployedOnProductsOptions(
            $deployedOnProductsWhere: CProductsBoolExp
            $where: CProductsBoolExp
          ) {
            deployedOnProducts: products(where: $deployedOnProductsWhere) {
              label: name
              value: id
              description
            }
            products(where: $where) {
              # Additional fields if needed
              id
            }
          }
        `),
        {
          deployedOnProductsWhere: {
            root: {
              products: {
                ...(isNotEmpty(siteConfig.blockchainIds) && {
                  productDeployments: {
                    productId: { _in: siteConfig.blockchainIds }
                  }
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
            }
          },
          where
        }
      );
      return validateAndFormatOptions(data?.deployedOnProducts);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productDeployments: {
            deploymentId: { _in: value }
          }
        }
      }
    })
  });

  /*************************************
   * ASSET FILTERS
   *************************************/
  const assetTypeFilter = useFilter<string, string>({
    id: 'assetType',
    type: 'multiselect',
    initialValue: queryParams.assetType,
    onChange: newValue => setQueryParams({ assetType: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getAssetTypeOptions($where: CAssetTypesBoolExp) {
            assetTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.assetTypes);
    },
    getQueryConditions: value => ({
      root: {
        assets: {
          assetTypeId: { _in: value }
        }
      }
    })
  });

  const assetTickerFilter = useFilter<string, string>({
    id: 'assetTicker',
    type: 'multiselect',
    initialValue: queryParams.assetTicker,
    onChange: newValue => setQueryParams({ assetTicker: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getAssetTickerOptions($where: CAssetsBoolExp) {
            assets(where: $where) {
              ticker
            }
          }
        `),
        { where }
      );
      const options = data?.assets
        ?.map(item => item.ticker)
        .filter(ticker => ticker && ticker !== '')
        .map(ticker => ({
          value: ticker,
          label: ticker,
          description: null
        }));
      return validateAndFormatOptions(options);
    },
    getQueryConditions: value => ({
      root: {
        assets: {
          ticker: { _in: value }
        }
      }
    })
  });

  const assetDeployedOnFilter = useFilter<string, string>({
    id: 'assetDeployedOn',
    type: 'multiselect',
    initialValue: queryParams.assetDeployedOn,
    onChange: newValue => setQueryParams({ assetDeployedOn: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getDeployedOnProductsOptions(
            $deployedOnProductsWhere: CProductsBoolExp
            $where: CProductsBoolExp
          ) {
            deployedOnProducts: products(where: $deployedOnProductsWhere) {
              label: name
              value: id
              description
            }
            products(where: $where) {
              # Additional fields if needed
              id
            }
          }
        `),
        {
          deployedOnProductsWhere: {
            root: {
              products: {
                ...(isNotEmpty(siteConfig.blockchainIds) && {
                  productDeployments: {
                    productId: { _in: siteConfig.blockchainIds }
                  }
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
            }
          },
          where
        }
      );
      return validateAndFormatOptions(data?.deployedOnProducts);
    },
    getQueryConditions: value => ({
      root: {
        assets: {
          assetDeployments: {
            smartContractDeployment: {
              deployedOnId: { _in: value }
            }
          }
        }
      }
    })
  });

  const assetStandardFilter = useFilter<string, string>({
    id: 'assetStandard',
    type: 'multiselect',
    enabled: false,
    initialValue: queryParams.assetStandard,
    onChange: newValue => setQueryParams({ assetStandard: newValue }),
    getOptions: async () => {
      const { assetDeployedOnFilter, ...filters } = filtersRef.current as any;
      const where = buildMultiselectWhere(filters);
      const data = await execute(
        graphql(`
          query getAssetStandardOptions($where: CAssetStandardsBoolExp) {
            assetStandards(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.assetStandards);
    }
    // getQueryConditions: value => ({
    //   root: {
    //     assets: {
    //       assetStandard: { id: { _in: value } }
    //     }
    //   }
    // })
  });

  /*************************************
   * ENTITY FILTERS
   *************************************/
  const entityTypeFilter = useFilter<string, string>({
    id: 'entityType',
    type: 'multiselect',
    initialValue: queryParams.entityType,
    onChange: newValue => setQueryParams({ entityType: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getEntityTypeOptions($where: CEntityTypesBoolExp) {
            entityTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.entityTypes);
    },
    getQueryConditions: value => ({
      root: {
        entities: {
          entityTypeId: { _in: value }
        }
      }
    })
  });

  const entityNameFilter = useFilter<string, string>({
    id: 'entityName',
    type: 'multiselect',
    initialValue: queryParams.entityName,
    onChange: newValue => setQueryParams({ entityName: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getEntityNameOptions($where: CEntitiesBoolExp) {
            entities(where: $where) {
              label: name
              value: id
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.entities);
    },
    getQueryConditions: value => ({
      root: {
        entities: {
          id: { _in: value }
        }
      }
    })
  });

  const entityCountryFilter = useFilter<string, string>({
    id: 'entityCountry',
    type: 'multiselect',
    initialValue: queryParams.entityCountry,
    onChange: newValue => setQueryParams({ entityCountry: newValue }),
    getOptions: async () => {
      const where = buildMultiselectWhere(filtersRef.current);
      const data = await execute(
        graphql(`
          query getEntityCountryOptions($where: CCountriesBoolExp) {
            countries(where: $where) {
              label: name
              value: id
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.countries);
    },
    getQueryConditions: value => ({
      root: {
        entities: {
          countryId: { _in: value }
        }
      }
    })
  });

  // Collect all filters in an object and store in ref so we can access them
  // from within each filter's getOptions.
  const filters = {
    searchFilter,
    profileTypeFilter,
    profileSectorsFilter,
    profileStatusesFilter,
    profileFoundingDateFilter,
    productStatusFilter,
    productTypesFilter,
    productLaunchDateFilter,
    supportsProductsFilter,
    productDeployedOnFilter,
    assetTypeFilter,
    assetTickerFilter,
    assetDeployedOnFilter,
    assetStandardFilter,
    entityTypeFilter,
    entityNameFilter,
    entityCountryFilter,
    tagsFilter,
    productAssetRelationshipsFilter
  };

  filtersRef.current = filters;

  // Merge each filter’s conditions into a final “where” object.
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
