import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'assetStandard';

export const useAssetStandardFilter = (filterStore: FiltersStore) => {
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
      // const { assetDeployedOnFilter, ...filters } = filterStore as any;
      const where = {};
      const data = await execute(
        graphql(`
          query getAssetStandardOptions($where: CAssetStandardsBoolExp) {
            assetStandards(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.assetStandards);
    },
    getQueryConditions: value => ({
      root: {
        assets: {
          assetDeployments: {
            smartContractDeployment: {
              isOfStandardId: { _in: value }
            }
          }
        }
      }
    })
  });
};
