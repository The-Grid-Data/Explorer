import { siteConfig } from '@/lib/site-config';
import { CProfileInfosBoolExp } from '../graphql/generated/graphql';
import deepmerge from 'deepmerge';

const getDefaultWhereFilter = (): CProfileInfosBoolExp => {
  const orConditions: CProfileInfosBoolExp[] = [];

  if (siteConfig.overrideFilterValues.productIds?.length) {
    orConditions.push(
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
    );
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

  if (siteConfig.overrideFilterValues.productAssetRelationships?.length) {
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

  return orConditions.length ? { _or: orConditions } : {};
};

export const withDefaultWhereFilter = (where: CProfileInfosBoolExp = {}) => {
  return deepmerge(where, getDefaultWhereFilter());
};
