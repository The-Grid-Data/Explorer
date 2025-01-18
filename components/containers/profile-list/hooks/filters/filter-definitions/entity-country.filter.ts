import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'entityCountry';

export const useEntityCountryFilter = (filterStore: FiltersStore) => {
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
          query getEntityCountryOptions($where: CCountriesBoolExp) {
            countries(where: $where) {
              label: name
              value: id
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.countries);
    },
    getQueryConditions: value => ({
      root: {
        entities: {
          countryId: { _in: value }
        }
      }
    })
  });
};
