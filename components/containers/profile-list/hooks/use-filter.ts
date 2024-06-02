import { useState } from 'react';

type Options<T> = Array<{
  label: string;
  value: T;
  description?: string | null;
}>;

// Define the types for search and select filter props
type BaseFilterProps<T> = {
  initialValue?: T;
};

export type SearchFilterProps = BaseFilterProps<string> & {
  type: 'search';
};

export type SelectFilterProps<T> = BaseFilterProps<string> & {
  type: 'select';
  options?: Options<T>;
};

export type MultiSelectFilterProps<T> = BaseFilterProps<string[]> & {
  type: 'multiselect';
  options?: Options<T>;
};

export type RangeFilterProps<T> = BaseFilterProps<[T, T]> & {
  type: 'range';
};

export type UseFilterProps<T> =
  | SearchFilterProps
  | SelectFilterProps<T>
  | MultiSelectFilterProps<T>
  | RangeFilterProps<T>;

export type BaseReturn = {
  reset: () => void;
  active: boolean;
};

// Define overloads for the useFilter function
export function useFilter(props: SearchFilterProps): BaseReturn & {
  type: 'search';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export function useFilter<T extends string | number>(
  props: SelectFilterProps<T>
): BaseReturn & {
  type: 'select';
  value: T;
  options?: Options<T>;
  setValue: React.Dispatch<React.SetStateAction<T>>;
};

export function useFilter<T extends string | number>(
  props: MultiSelectFilterProps<T>
): BaseReturn & {
  type: 'multiselect';
  value: Array<T>;
  options?: Array<{
    label: string;
    value: T;
    description: string;
  }>;
  setValue: React.Dispatch<React.SetStateAction<Array<T>>>;
};

export function useFilter<T extends string | number | null>(
  props: RangeFilterProps<T>
): BaseReturn & {
  type: 'range';
  value: [T, T];
  setValue: React.Dispatch<React.SetStateAction<[T, T]>>;
};

// Implement the useFilter function
export function useFilter<T>(props: UseFilterProps<T>): any {
  const { initialValue, type } = props;
  const [value, setValue] = useState(initialValue);

  const reset = () => {
    setValue(initialValue);
  };

  const base = {
    reset,
    type
  };

  if (type === 'select') {
    return {
      ...base,
      active: (value as any)?.length > 0,
      value: value as T,
      options: props.options,
      setValue: setValue as React.Dispatch<React.SetStateAction<T>>
    };
  }

  if (type === 'multiselect') {
    return {
      ...base,
      active: (value as Array<T>)?.length > 0,
      value: value as Array<T>,
      options: props.options,
      setValue: setValue as React.Dispatch<React.SetStateAction<Array<T>>>
    };
  }

  if (type === 'search') {
    return {
      ...base,
      active: (value as string)?.length > 0,
      value: value as string,
      setValue: setValue as React.Dispatch<React.SetStateAction<string>>
    };
  }

  if (type === 'range') {
    return {
      ...base,
      active: (value as [T, T])?.every(i => i),
      value: value as [T, T],
      setValue: setValue as React.Dispatch<React.SetStateAction<[T, T]>>
    };
  }

  throw new Error('Invalid filter type');
}
