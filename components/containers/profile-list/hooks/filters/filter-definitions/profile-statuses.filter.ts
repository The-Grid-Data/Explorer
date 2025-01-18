import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { FiltersStore } from '../../use-profile-filters';

const filterId = 'profileStatuses';

export const useProfileStatusesFilter = (filterStore: FiltersStore) => {
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
          query getProfileStatusesOptions($where: CProfileStatusesBoolExp) {
            profileStatuses(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.profileStatuses);
    },
    getQueryConditions: value => ({
      profileStatus: { id: { _in: value } }
    })
  });
};
