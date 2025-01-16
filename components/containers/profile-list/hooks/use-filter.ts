import { useState } from 'react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import { SearchProfilesQueryVariables } from '@/lib/graphql/generated/graphql';

export type Options<O> = Array<{
  label: string;
  value: O;
  description?: string | null;
  count?: number | string | null;
  disabled?: boolean;
}>;

type BaseFilterProps<T = unknown, O = unknown> = {
  id: string;
  initialValue?: T;
  enabled?: boolean;
  onChange?: (newValue: T) => void;
  getOptions?: () => Promise<Options<O>> | Options<O>;
  options?: UseQueryResult<Options<O>, Error>;
  getQueryConditions?: (
    value: NonNullable<T>
  ) => Partial<SearchProfilesQueryVariables['where']>;
};

export type SearchFilterProps = BaseFilterProps<string> & {
  type: 'search';
};

export type SelectFilterProps<T> = BaseFilterProps<T | null> & {
  type: 'select';
};

export type MultiSelectFilterProps<T> = BaseFilterProps<T[]> & {
  type: 'multiselect';
};

export type RangeFilterProps<T> = BaseFilterProps<[T, T] | null> & {
  type: 'range';
};

export type UseFilterProps<T> =
  | SearchFilterProps
  | SelectFilterProps<T>
  | MultiSelectFilterProps<T>
  | RangeFilterProps<T>;

export type BaseReturn = {
  enabled: boolean;
  reset: () => void;
  active: boolean;
  getQueryConditions: () =>
    | Partial<SearchProfilesQueryVariables['where']>
    | undefined;
};

type SearchReturn = BaseReturn & {
  type: 'search';
  value: string;
  setValue: (newValue: string) => void;
};

type SelectReturn<T, O> = BaseReturn & {
  type: 'select';
  value: T | null;
  setValue: (newValue: T | null) => void;
  options?: UseQueryResult<Options<O>, Error>;
};

type MultiSelectReturn<T, O> = BaseReturn & {
  type: 'multiselect';
  value: T[];
  setValue: (newValue: T[]) => void;
  options?: UseQueryResult<Options<O>, Error>;
};

type RangeReturn<T> = BaseReturn & {
  type: 'range';
  value: [T, T] | null;
  setValue: (newValue: [T, T] | null) => void;
};

// Function overloads
export function useFilter(props: SearchFilterProps): SearchReturn;
export function useFilter<T, O>(
  props: SelectFilterProps<T>
): SelectReturn<T, O>;
export function useFilter<T, O>(
  props: MultiSelectFilterProps<T>
): MultiSelectReturn<T, O>;
export function useFilter<T>(props: RangeFilterProps<T>): RangeReturn<T>;

export function useFilter<T, O = unknown>(
  props: UseFilterProps<T>
):
  | SearchReturn
  | SelectReturn<T, O>
  | MultiSelectReturn<T, O>
  | RangeReturn<T> {
  const {
    id,
    type,
    initialValue,
    onChange,
    getOptions,
    options: providedOptions,
    getQueryConditions,
    enabled = true
  } = props;

  const [value, _setValue] = useState<typeof initialValue>(initialValue);

  const { data = [], ...options } = useQuery({
    queryKey: [id],
    queryFn: () => getOptions?.(),
    initialData: [],
    enabled: !!getOptions
  });

  const optionsQueryResult = { ...options, data };

  const setValue = (newValue: typeof initialValue) => {
    _setValue(newValue);
    onChange?.(newValue as any);
  };

  const reset = () => {
    setValue(null);
  };

  const base = {
    enabled,
    reset,
    getQueryConditions: () => {
      if (!getQueryConditions) return undefined;
      if (!value) return {};
      if (Array.isArray(value) && !isNotEmpty(value)) return {};
      if (typeof value === 'string' && !isNotEmpty(value)) return {};

      if (type === 'search' && typeof value === 'string') {
        return getQueryConditions(value);
      }
      if (type === 'select' && value !== null) {
        return getQueryConditions(value as NonNullable<T>);
      }
      if (type === 'multiselect' && Array.isArray(value)) {
        return getQueryConditions(value as NonNullable<T[]>);
      }
      if (type === 'range' && Array.isArray(value) && value.length === 2) {
        return getQueryConditions(value as [NonNullable<T>, NonNullable<T>]);
      }
      return {};
    },
    options: providedOptions ?? optionsQueryResult
  };

  if (type === 'search') {
    return {
      ...base,
      type: 'search',
      active: typeof value === 'string' && value.length > 0,
      value: value as string,
      setValue: (newValue: string) => {
        setValue(newValue);
      }
    };
  }

  if (type === 'select') {
    return {
      ...base,
      type: 'select',
      active: value != null,
      value: value as T | null,
      setValue: (newValue: T | null) => {
        setValue(newValue);
      },
      options: (providedOptions ?? optionsQueryResult) as UseQueryResult<
        Options<O>,
        Error
      >
    };
  }

  if (type === 'multiselect') {
    return {
      ...base,
      type: 'multiselect',
      active: Array.isArray(value) && value.length > 0,
      value: (value ?? []) as T[],
      setValue: (newValue: T[]) => {
        setValue(newValue);
      },
      options: (providedOptions ?? optionsQueryResult) as UseQueryResult<
        Options<O>,
        Error
      >
    };
  }

  if (type === 'range') {
    return {
      ...base,
      type: 'range',
      active:
        Array.isArray(value) &&
        value.length === 2 &&
        value.every(v => v != null),
      value: value as [T, T] | null,
      setValue: (newValue: [T, T] | null) => {
        setValue(newValue);
      }
    };
  }

  throw new Error('Invalid filter type');
}
