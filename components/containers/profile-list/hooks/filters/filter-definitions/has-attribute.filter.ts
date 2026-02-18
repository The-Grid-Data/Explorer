import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import type { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';

const filterId = 'hasAttribute';

export const useHasAttributeFilter = (filterStore: FiltersStore) => {
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
          query getAttributeTypesOptions {
            attributeTypes {
              label: name
              value: id
              description: definition
              attributesAggregate {
                _count
              }
            }
          }
        `)
      );
      const options = data?.attributeTypes
        ?.filter(item => item.attributesAggregate?._count > 0)
        ?.map(({ attributesAggregate, ...rest }) => rest);
      return validateAndFormatOptions(options);
    },
    getQueryConditions: value => ({
      attributes: { attributeTypeId: { _in: value } }
    })
  });
};
