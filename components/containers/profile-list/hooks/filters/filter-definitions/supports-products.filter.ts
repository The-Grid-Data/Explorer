import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId, mergeConditions } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { CSupportsProductsBoolExp } from '@/lib/graphql/generated/graphql';
import { siteConfig } from '@/lib/site-config';

const filterId = 'supportsProducts';

export const useSupportsProductsFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    'productSupports',
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
          query getSupportsProductsOptions($where: CSupportsProductsBoolExp) {
            supportsProducts(where: $where) {
              supportsProduct {
                name
                id
                description
              }
            }
          }
        `),
        {
          where: buildSupportsProductsWhere(filterStore)
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
};

function buildSupportsProductsWhere(
  filterStore: FiltersStore
): CSupportsProductsBoolExp {
  const conditions: CSupportsProductsBoolExp[] = [];

  if (isNotEmpty(siteConfig.overrideFilterValues.productDeployedOn)) {
    conditions.push({
      supportsProduct: {
        id: { _in: siteConfig.overrideFilterValues.productDeployedOn }
      }
    });
  }

  return mergeConditions(conditions);
}
