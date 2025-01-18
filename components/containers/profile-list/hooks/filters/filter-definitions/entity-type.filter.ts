import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'entityType';

export const useEntityTypeFilter = (filterStore: FiltersStore) => {
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
          query getEntityTypeOptions($where: CEntityTypesBoolExp) {
            entityTypes(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.entityTypes);
    },
    getQueryConditions: value => ({
      root: {
        entities: {
          entityTypeId: { _in: value }
        }
      }
    })
  });
};
