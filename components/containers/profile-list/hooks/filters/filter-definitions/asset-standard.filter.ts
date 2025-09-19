import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';
import { parseAsArrayOf, useQueryState } from 'nuqs';
import { useFilter } from '../../use-filter';
import { FiltersStore } from '../../use-profile-filters';
import { parseAsId, validateAndFormatOptions } from '../utils';

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
          query getAssetStandardOptions($where: AssetStandardsBoolExp) {
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
              assetStandardId: { _in: value }
            }
          }
        }
      }
    })
  });
};
