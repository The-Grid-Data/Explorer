import { useFilter } from '../../use-filter';
import { useQueryState, parseAsString } from 'nuqs';

const filterId = 'search';

export const useSearchFilter = () => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsString.withDefault('')
  );

  console.log('[useSearchFilter] Current URL state value:', value);

  return useFilter({
    id: filterId,
    type: 'search',
    initialValue: value,
    onChange: newValue => {
      console.log('[useSearchFilter] onChange called with:', newValue);
      console.log('[useSearchFilter] Calling setValue to update URL state');
      setValue(newValue);
    },
    getQueryConditions: value => ({
      _and: [
        {
          _or: [
            { name: { _like: `%${value}%` } },
            {
              root: {
                products: {
                  name: { _like: `%${value}%` }
                }
              }
            }
          ]
        }
      ]
    })
  });
};
