import { useFilter } from '../../use-filter';
import { useQueryState, parseAsArrayOf, parseAsString } from 'nuqs';

const filterId = 'profileFoundingDate';

export const useProfileFoundingDateFilter = () => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsArrayOf(parseAsString)
  );

  return useFilter<string>({
    id: filterId,
    type: 'range',
    initialValue: value as [string, string] | null,
    onChange: newValue => setValue(newValue),
    getQueryConditions: value => ({
      foundingDate: {
        _gte: value[0],
        _lte: value[1]
      }
    })
  });
};
