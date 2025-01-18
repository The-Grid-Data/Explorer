import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { siteConfig } from '@/lib/site-config';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'assetDeployedOnFilter';

export const useAssetDeployedOnFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    filterId,
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
          query getDeployedOnProductsOptions(
            $deployedOnProductsWhere: CProductsBoolExp
            $where: CProductsBoolExp
          ) {
            deployedOnProducts: products(where: $deployedOnProductsWhere) {
              label: name
              value: id
              description
            }
            products(where: $where) {
              id
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
          },
          where
        }
      );
      return validateAndFormatOptions(data?.deployedOnProducts);
    },
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
};
