import { useFilter } from '../../use-filter';
import { useQueryState, parseAsString } from 'nuqs';

const filterId = 'search';

export const useSearchFilter = () => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsString.withDefault('')
  );

  return useFilter({
    id: filterId,
    type: 'search',
    initialValue: value,
    onChange: newValue => setValue(newValue),
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
