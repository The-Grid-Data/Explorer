import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'assetType';

export const useAssetTypeFilter = (filterStore: FiltersStore) => {
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
      const data = await execute(
        graphql(`
          query getAssetTypeOptions(
            $where: AssetTypesBoolExp
            $aggregateInput: AssetsFilterInput
          ) {
            assetTypes(where: $where) {
              label: name
              value: id
              description: definition
              assetsAggregate(filter_input: $aggregateInput) {
                _count
              }
            }
          }
        `),
        { where: {} }
      );
      return validateAndFormatOptions(
        data?.assetTypes
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.assetsAggregate?._count
          }))
          .filter(item => item.count)
          .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      );
    },
    getQueryConditions: value => ({
      root: {
        assets: {
          assetTypeId: { _in: value }
        }
      }
    })
  });
};
