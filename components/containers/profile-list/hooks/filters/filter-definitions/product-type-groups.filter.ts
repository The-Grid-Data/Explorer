import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId, mergeConditions } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import {
  ProductTypesBoolExp,
  ProductsBoolExp
} from '@/lib/graphql/generated/graphql';
import { siteConfig } from '@/lib/site-config';

const filterId = 'productTypeGroups';

// Raw GraphQL fetch for custom queries not in codegen
async function executeRawQuery<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL) {
    throw TypeError('NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL is not defined');
  }
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL, {
    method: 'POST',
    body: JSON.stringify({ query, variables }),
    headers: { 'Content-Type': 'application/json' }
  });
  const json = await res.json();
  if (json.errors) {
    console.error('GraphQL Errors:', json.errors);
    throw TypeError(json.errors[0]?.message);
  }
  return json.data;
}

// Query to get product types with their slugs for mapping to groups
const GET_PRODUCT_TYPES_WITH_SLUG = `
  query getProductTypesWithSlug(
    $where: ProductTypesBoolExp
    $aggregateInput: ProductsFilterInput
  ) {
    productTypes(where: $where) {
      id
      name
      slug
      definition
      productsAggregate(filter_input: $aggregateInput) {
        _count
      }
    }
  }
`;

interface ProductTypeWithSlug {
  id: string;
  name: string;
  slug: string;
  definition?: string | null;
  productsAggregate?: { _count: number } | null;
}

interface GetProductTypesWithSlugResponse {
  productTypes: ProductTypeWithSlug[];
}

export const useProductTypeGroupsFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsArrayOf(parseAsId).withDefault([])
  );

  return useFilter<string, string>({
    id: filterId,
    type: 'multiselect',
    optionsQueryDeps: [filterStore],
    initialValue: value,
    onChange: newValue => setValue(newValue),
    getOptions: async () => {
      const where = buildProductTypesWhere(filterStore);
      const aggregateInput = { where: buildAggregateInput(filterStore) };
      
      console.log('=== ProductTypeGroups Debug ===');
      console.log('Filter Store:', JSON.stringify(filterStore, null, 2));
      console.log('Built Where Clause:', JSON.stringify(where, null, 2));
      console.log('Aggregate Input:', JSON.stringify(aggregateInput, null, 2));
      console.log('siteConfig.productTypeGroups:', siteConfig.productTypeGroups);

      const queryVariables = {
        where: Object.keys(where).length > 0 ? where : undefined,
        aggregateInput: aggregateInput
      };
      
      console.log('Query Variables being sent:', JSON.stringify(queryVariables, null, 2));
      console.log('Raw Query:', GET_PRODUCT_TYPES_WITH_SLUG);
      
      const data = await executeRawQuery<GetProductTypesWithSlugResponse>(
        GET_PRODUCT_TYPES_WITH_SLUG,
        queryVariables
      );

      console.log('Fetched Product Types:', data?.productTypes);

      // Build slug→data mapping
      const productTypeMap = new Map(
        data?.productTypes?.map(pt => [
          pt.slug,
          {
            id: pt.id,
            name: pt.name,
            definition: pt.definition,
            count: pt.productsAggregate?._count ?? 0
          }
        ])
      );

      // Build group options from config
      const groups = siteConfig.productTypeGroups || [];
      console.log('Configured Groups:', groups);

      const groupOptions = groups
        .map(group => {
          // Aggregate counts for all product types in this group
          const totalCount = group.productTypeSlugs.reduce((sum, slug) => {
            const ptData = productTypeMap.get(slug);
            if (!ptData) {
              console.warn(`Product type slug not found: ${slug} in group ${group.label}`);
            }
            return sum + (ptData?.count ?? 0);
          }, 0);

          return {
            label: group.label,
            value: group.id,
            description: group.description,
            count: totalCount,
            order: group.order ?? 999
          };
        })
        // .filter(group => group.count > 0) // Show all groups for now
        .sort((a, b) => (a.order ?? 999) - (b.order ?? 999));

      const validatedOptions = validateAndFormatOptions(groupOptions);
      
      // Attach raw product types data for the hero filters component to use
      (validatedOptions as any)._productTypesData = data?.productTypes;
      
      return validatedOptions;
    },
    // This filter doesn't directly affect the query anymore
    // It controls the productTypes filter instead
    getQueryConditions: () => undefined
  });
};

function buildProductTypesWhere(
  filterStore: FiltersStore
): ProductTypesBoolExp {
  const conditions: ProductTypesBoolExp[] = [];

  // Apply base config restriction for product types
  if (isNotEmpty(siteConfig.overrideFilterValues.productTypes)) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            root: {
              products: {
                productTypeId: {
                  _in: siteConfig.overrideFilterValues.productTypes
                }
              }
            }
          }
        }
      }
    });
  }

  if (
    isNotEmpty(filterStore.tagsFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.tags)
  ) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            root: {
              profileTags: {
                tagId: {
                  _in: [
                    ...filterStore.tagsFilter,
                    ...siteConfig.overrideFilterValues.tags
                  ]
                }
              }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            profileSectorId: {
              _in: filterStore.profileSectorsFilter
            }
          }
        }
      }
    });
  }

  if (
    isNotEmpty(filterStore.productAssetRelationshipsFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.productAssetRelationships)
  ) {
    conditions.push({
      products: {
        root: {
          profileInfos: {
            root: {
              products: {
                productAssetRelationships: {
                  asset: {
                    ticker: {
                      _in: siteConfig.overrideFilterValues
                        .productAssetRelationships
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(siteConfig.overrideFilterValues.productIds)) {
    conditions.push({
      _or: [
        {
          products: {
            root: {
              profileInfos: {
                root: {
                  products: {
                    supportsProducts: {
                      supportsProductId: {
                        _in: siteConfig.overrideFilterValues.productIds
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          products: {
            root: {
              profileInfos: {
                root: {
                  products: {
                    productDeployments: {
                      smartContractDeployment: {
                        deployedOnId: {
                          _in: siteConfig.overrideFilterValues.productIds
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        },
        {
          products: {
            root: {
              profileInfos: {
                root: {
                  products: {
                    id: {
                      _in: siteConfig.overrideFilterValues.productIds
                    }
                  }
                }
              }
            }
          }
        }
      ]
    });
  }

  return mergeConditions(conditions);
}

function buildAggregateInput(filterStore: FiltersStore): ProductsBoolExp {
  const conditions: Array<ProductsBoolExp> = [];

  if (
    isNotEmpty(filterStore.tagsFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.tags)
  ) {
    conditions.push({
      root: {
        profileTags: {
          tagId: {
            _in: [
              ...filterStore.tagsFilter,
              ...siteConfig.overrideFilterValues.tags
            ]
          }
        }
      }
    });
  }

  if (isNotEmpty(filterStore.profileSectorsFilter)) {
    conditions.push({
      root: {
        products: {
          root: {
            profileInfos: {
              profileSectorId: {
                _in: filterStore.profileSectorsFilter
              }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(siteConfig.overrideFilterValues.productTypes)) {
    conditions.push({
      root: {
        products: {
          productTypeId: {
            _in: siteConfig.overrideFilterValues.productTypes
          }
        }
      }
    });
  }

  if (
    isNotEmpty(filterStore.productAssetRelationshipsFilter) ||
    isNotEmpty(siteConfig.overrideFilterValues.productAssetRelationships)
  ) {
    conditions.push({
      root: {
        products: {
          productAssetRelationships: {
            asset: {
              ticker: {
                _in: [
                  ...filterStore.productAssetRelationshipsFilter,
                  ...siteConfig.overrideFilterValues.productAssetRelationships
                ]
              }
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(siteConfig.overrideFilterValues.productIds)) {
    conditions.push({
      _or: [
        {
          root: {
            products: {
              supportsProducts: {
                supportsProductId: {
                  _in: siteConfig.overrideFilterValues.productIds
                }
              }
            }
          }
        },
        {
          root: {
            products: {
              productDeployments: {
                smartContractDeployment: {
                  deployedOnId: {
                    _in: siteConfig.overrideFilterValues.productIds
                  }
                }
              }
            }
          }
        },
        {
          root: {
            products: {
              id: {
                _in: siteConfig.overrideFilterValues.productIds
              }
            }
          }
        }
      ]
    });
  }

  return mergeConditions(conditions);
}