import { siteConfig } from '@/lib/site-config';
import { SearchProfilesQueryVariables } from '@/lib/graphql/generated-graphql';

const defaultWhereFilter = {
  _and: [
    {
      _or: [
        {
          products: {
            supportsProducts: {
              supportsProductId: {
                _in: siteConfig.filterByProductIds
              }
            }
          }
        },
        {
          products: {
            deployedOnProductId: {
              _in: siteConfig.filterByProductIds
            }
          }
        },
        {
          products: {
            id: {
              _in: siteConfig.filterByProductIds
            }
          }
        },
        {
          assets: {
            deployedOnProductId: {
              _in: siteConfig.filterByProductIds
            }
          }
        }
      ]
    }
  ]
};

export const withDefaultWhereFilter = (
  where: SearchProfilesQueryVariables['where']
) => {
  if (!siteConfig.filterByProductIds?.length) return where;

  where = where ?? {};

  where._and = where._and
    ? [...where._and, ...defaultWhereFilter._and]
    : [...defaultWhereFilter._and];

  return where;
};
