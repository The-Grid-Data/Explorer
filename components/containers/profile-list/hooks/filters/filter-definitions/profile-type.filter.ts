import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { FiltersStore } from '../../use-profile-filters';

const filterId = 'profileType';

export const useProfileTypeFilter = (filterStore: FiltersStore) => {
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
          query getProfileTypeOptions($where: CProfileTypesBoolExp) {
            profileTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.profileTypes);
    },
    getQueryConditions: value => ({
      profileType: { id: { _in: value } }
    })
  });
};
