import { CProfileInfosBoolExp } from '@/lib/graphql/generated/graphql';
import { useQueryStates, parseAsArrayOf, parseAsString } from 'nuqs';
import { useFilter } from './use-filter';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { siteConfig } from '@/lib/site-config';
import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';
import { z } from 'zod';
import { createParser } from 'nuqs';
export type Filters = ReturnType<typeof useProfileFilters>;

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

export const useProfileFilters = () => {
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

  /*************************************
   * CHECKBOX GRID FILTERS
   *************************************/
  const productTypesFilter = useFilter<string, string>({
    id: 'productTypes',
    getOptions: async () => {
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
        { where: {} }
      );
      return validateAndFormatOptions(data?.productTypes);
    },
    type: 'multiselect',
    initialValue: queryParams.productTypes,
    onChange: newValue => setQueryParams({ productTypes: newValue }),
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
    initialValue: queryParams.tags,
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getTagsOptions {
            tags {
              value: id
              label: name
              description
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.tags);
    },
    onChange: newValue => setQueryParams({ tags: newValue }),
    getQueryConditions: value => ({
      root: {
        profileTags: { tagId: { _in: value } }
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getProfileTypeOptions {
            profileTypes {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.profileTypes);
    },
    onChange: newValue => setQueryParams({ profileType: newValue }),
    getQueryConditions: value => ({
      profileType: { id: { _in: value } }
    })
  });

  const profileSectorsFilter = useFilter<string, string>({
    id: 'profileSectors',
    type: 'multiselect',
    initialValue: queryParams.profileSectors,
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getProfileSectorsOptions {
            profileSectors {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.profileSectors);
    },
    onChange: newValue => setQueryParams({ profileSectors: newValue }),
    getQueryConditions: value => ({
      profileSector: { id: { _in: value } }
    })
  });

  const profileStatusesFilter = useFilter<string, string>({
    id: 'profileStatuses',
    type: 'multiselect',
    initialValue: queryParams.profileStatuses,
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getProfileStatusesOptions {
            profileStatuses {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.profileStatuses);
    },
    onChange: newValue => setQueryParams({ profileStatuses: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getProductStatusesOptions {
            productStatuses {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.productStatuses);
    },
    onChange: newValue => setQueryParams({ productStatus: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getSupportsProductsOptions(
            $supportsProductsWhere: CSupportsProductsBoolExp
          ) {
            supportsProducts(where: $supportsProductsWhere) {
              supportsProduct {
                name
                id
                description
              }
            }
          }
        `),
        {
          supportsProductsWhere: {
            ...(isNotEmpty(siteConfig.blockchainIds) && {
              supportsProduct: {
                id: {
                  _in: siteConfig.blockchainIds
                }
              }
            })
          }
        }
      );
      //@todo: API REQUEST we are filtering products by distinct id in the FE, we might wanna move this to the query but is not supported at the moment
      const options = Array.from(
        new Map(
          (data?.supportsProducts ?? [])
            ?.map(item => ({
              value: item.supportsProduct?.id,
              label: item.supportsProduct?.name ?? ' - ',
              description: item.supportsProduct?.description ?? ' - '
            }))
            .map(option => [option.value, option])
        ).values()
      );
      return validateAndFormatOptions(options);
    },
    onChange: newValue => setQueryParams({ productSupports: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getDeployedOnProductsOptions(
            $deployedOnProductsWhere: CProductsBoolExp
          ) {
            deployedOnProducts: products(where: $deployedOnProductsWhere) {
              label: name
              value: id
              description
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
          }
        }
      );
      return validateAndFormatOptions(data?.deployedOnProducts);
    },
    onChange: newValue => setQueryParams({ productDeployedOn: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getAssetTypeOptions {
            assetTypes {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.assetTypes);
    },
    onChange: newValue => setQueryParams({ assetType: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getAssetTickerOptions {
            assets {
              ticker
            }
          }
        `)
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
    onChange: newValue => setQueryParams({ assetTicker: newValue }),
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
    options: productDeployedOnFilter.options,
    onChange: newValue => setQueryParams({ assetDeployedOn: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getAssetStandardOptions {
            assetStandards {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.assetStandards);
    },
    onChange: newValue => setQueryParams({ assetStandard: newValue })
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getEntityTypeOptions {
            entityTypes {
              label: name
              value: id
              description: definition
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.entityTypes);
    },
    onChange: newValue => setQueryParams({ entityType: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getEntityNameOptions {
            entities {
              label: name
              value: id
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.entities);
    },
    onChange: newValue => setQueryParams({ entityName: newValue }),
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
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getEntityCountryOptions {
            countries {
              label: name
              value: id
            }
          }
        `)
      );
      return validateAndFormatOptions(data?.countries);
    },
    onChange: newValue => setQueryParams({ entityCountry: newValue }),
    getQueryConditions: value => ({
      root: {
        entities: {
          countryId: { _in: value }
        }
      }
    })
  });

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
    tagsFilter
  };

  const toQueryWhereFields = () => {
    const conditions = Object.values(filters)
      .map(filter => filter.getQueryConditions?.())
      .filter((condition): condition is CProfileInfosBoolExp =>
        Boolean(condition)
      );

    return conditions.reduce((acc, condition) => {
      const newAcc = { ...acc };
      if (condition.root) {
        newAcc.root = {
          ...newAcc.root,
          ...condition.root
        };
      }
      return { ...newAcc, ...condition };
    }, {} as CProfileInfosBoolExp);
  };

  return {
    filters,
    toQueryWhereFields
  };
};
