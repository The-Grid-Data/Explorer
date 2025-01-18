import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { siteConfig } from '@/lib/site-config';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'supportsProducts';

export const useSupportsProductsFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    'productSupports',
    parseAsArrayOf(parseAsId).withDefault([])
  );

  return useFilter<string, string>({
    id: filterId,
    type: 'multiselect',
    initialValue: value,
    onChange: newValue => setValue(newValue),
    getOptions: async () => {
      const where = {};
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
};
