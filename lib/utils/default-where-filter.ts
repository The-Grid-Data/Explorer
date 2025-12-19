import { siteConfig } from '@/lib/site-config';
import { ProfileInfosBoolExp } from '../graphql/generated/graphql';
import deepmerge from 'deepmerge';

const getDefaultWhereFilter = (): ProfileInfosBoolExp => {
  const orConditions: ProfileInfosBoolExp[] = [];

  // Check if we need special AND logic for productTypes + productAssetRelationships
  const hasProductTypes = siteConfig.overrideFilterValues.productTypes?.length;
  const hasProductAssetRelationships = siteConfig.overrideFilterValues.productAssetRelationships?.length;
  const useSpecialAndCase = hasProductTypes && hasProductAssetRelationships;

  if (siteConfig.overrideFilterValues.productIds?.length) {
    orConditions.push({
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
        },
        {
          root: {
            assets: {
              assetDeployments: {
                smartContractDeployment: {
                  deployedOnId: {
                    _in: siteConfig.overrideFilterValues.productIds
                  }
                }
              }
            }
          }
        }
      ]
    });
  }

  if (siteConfig.overrideFilterValues.tags?.length) {
    orConditions.push({
      root: {
        profileTags: {
          tagId: {
            _in: siteConfig.overrideFilterValues.tags
          }
        }
      }
    });
  }

  // Special case: when both productTypes AND productAssetRelationships are configured
  // they must BOTH match (AND logic within products)
  if (useSpecialAndCase) {
    orConditions.push({
      root: {
        products: {
          _and: [
            {
              productTypeId: {
                _in: siteConfig.overrideFilterValues.productTypes
              }
            },
            {
              productAssetRelationships: {
                asset: {
                  ticker: {
                    _in: siteConfig.overrideFilterValues.productAssetRelationships
                  }
                }
              }
            }
          ]
        }
      }
    });
  } else {
    // Independent filters: add them separately with OR logic
    if (hasProductAssetRelationships) {
      orConditions.push({
        root: {
          products: {
            productAssetRelationships: {
              asset: {
                ticker: {
                  _in: siteConfig.overrideFilterValues.productAssetRelationships
                }
              }
            }
          }
        }
      });
    }

    if (hasProductTypes) {
      orConditions.push({
        root: {
          products: {
            productTypeId: {
              _in: siteConfig.overrideFilterValues.productTypes
            }
          }
        }
      });
    }
  }

  return orConditions.length ? { _or: orConditions } : {};
};

export const withDefaultWhereFilter = (where: ProfileInfosBoolExp = {}) => {
  return deepmerge(where, getDefaultWhereFilter());
};
