import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId, mergeConditions } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { CProductsBoolExp } from '@/lib/graphql/generated/graphql';
import { siteConfig } from '@/lib/site-config';

const filterId = 'productDeployedOn';

export const useProductDeployedOnFilter = (filterStore: FiltersStore) => {
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
      const data = await execute(
        graphql(`
          query getProductDeployedOnProductsOptions($where: CProductsBoolExp) {
            products(where: $where) {
              name
              id
              description
            }
          }
        `),
        {
          where: buildDeployedOnProductsWhere(filterStore)
        }
      );

      const options = data?.products?.map(item => ({
        label: item.name,
        value: item.id,
        description: item.description
      }));

      return validateAndFormatOptions(options);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productDeployments: {
            smartContractDeployment: {
              deployedOnId: { _in: value }
            }
          }
        }
      }
    })
  });
};

function buildDeployedOnProductsWhere(
  filterStore: FiltersStore
): CProductsBoolExp {
  const conditions: CProductsBoolExp[] = [];

  if (isNotEmpty(siteConfig.overrideFilterValues.productDeployedOn)) {
    conditions.push({
      root: {
        products: {
          productDeployments: {
            productId: {
              _in: siteConfig.overrideFilterValues.productDeployedOn
            }
          }
        }
      }
    });
  }

  if (isNotEmpty(siteConfig.overrideOptionsFilterValues.productTypes)) {
    conditions.push({
      _or: [
        {
          root: {
            products: {
              productTypeId: {
                _in: siteConfig.overrideOptionsFilterValues.productTypes
              }
            }
          }
        }
      ]
    });
  }

  return mergeConditions(conditions);
}
