import { siteConfig } from '@/lib/site-config';
import {
  CProfileInfosBoolExp,
  SearchProfilesQueryVariables
} from '../graphql/generated/graphql';

const getDefaultWhereFilter = (): CProfileInfosBoolExp => {
  const orConditions: CProfileInfosBoolExp[] = [];

  if (siteConfig.filterByProductIds?.length) {
    orConditions.push(
      {
        root: {
          products: {
            supportsProducts: {
              supportsProductId: { _in: siteConfig.filterByProductIds }
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
                  _in: siteConfig.filterByProductIds
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
              _in: siteConfig.filterByProductIds
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
                  _in: siteConfig.filterByProductIds
                }
              }
            }
          }
        }
      }
    );
  }

  if (siteConfig.tags?.length) {
    orConditions.push({
      root: {
        profileTags: {
          tagId: {
            _in: siteConfig.tags
          }
        }
      }
    });
  }

  if (siteConfig.productSupportsAssetTicker?.length) {
    orConditions.push({
      root: {
        products: {
          productAssetRelationships: {
            asset: { ticker: { _in: siteConfig.productSupportsAssetTicker } }
          }
        }
      }
    });
  }

  return orConditions.length ? { _or: orConditions } : {};
};

export const withDefaultWhereFilter = (
  where: SearchProfilesQueryVariables['where'] = {}
) => {
  const defaultFilter = getDefaultWhereFilter();
  return Object.keys(defaultFilter).length
    ? { ...where, ...defaultFilter }
    : where;
};
