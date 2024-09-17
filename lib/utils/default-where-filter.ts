import { siteConfig } from '@/lib/site-config';
import { SearchProfilesQueryVariables } from '@/lib/graphql/generated-graphql';

const getDefaultWhereFilter = () => {
  const orConditions = [];

  if (siteConfig.filterByProductIds?.length) {
    orConditions.push(
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
    );
  }

  if (siteConfig.tags?.length) {
    orConditions.push({
      profileTags: {
        tagId: {
          _in: siteConfig.tags
        }
      }
    });
  }

  return orConditions.length ? { _and: [{ _or: orConditions }] } : {};
};

export const withDefaultWhereFilter = (
  where: SearchProfilesQueryVariables['where'] = {}
) => {
  const defaultFilter = getDefaultWhereFilter();
  return Object.keys(defaultFilter).length
    ? { ...where, ...defaultFilter }
    : where;
};
