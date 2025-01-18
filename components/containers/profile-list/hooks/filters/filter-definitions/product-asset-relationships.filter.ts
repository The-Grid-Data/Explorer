import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'productAssetRelationships';

export const useProductAssetRelationshipsFilter = (
  filterStore: FiltersStore
) => {
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
          query getProductAssetRelationshipsOptions($where: CAssetsBoolExp) {
            assets(where: $where) {
              ticker
            }
          }
        `),
        { where }
      );
      const options = data?.assets
        ?.map(item => ({
          value: item.ticker,
          label: item.ticker,
          description: null
        }))
        .filter(option => option.label?.trim());
      return validateAndFormatOptions(options);
    },
    getQueryConditions: value => ({
      root: {
        products: {
          productAssetRelationships: { asset: { ticker: { _in: value } } }
        }
      }
    })
  });
};
