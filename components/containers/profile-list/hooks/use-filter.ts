'use client';

import { useState } from 'react';
import { useQueryState } from 'nuqs';

type Options<T> = Array<{
  label: string;
  value: T;
  description?: string | null;
}>;

// Define the types for search and select filter props
type BaseFilterProps<T, C = unknown> = {
  name: string;
  config?: C;
  parseBuilder: any;
};

export type SearchFilterProps<T, C = unknown> = BaseFilterProps<T, C> & {
  type: 'search';
  config: C;
};

export type SelectFilterProps<T, C = unknown> = BaseFilterProps<T, C> & {
  type: 'select';
  options?: Options<T>;
};

export type MultiSelectFilterProps<T, C = unknown> = BaseFilterProps<T[], C> & {
  type: 'multiselect';
  options?: Options<T>;
};

export type RangeFilterProps<T, C = unknown> = BaseFilterProps<[T, T], C> & {
  type: 'range';
};

export type UseFilterProps<T = unknown, C = unknown> =
  | SearchFilterProps<T, C>
  | SelectFilterProps<T, C>
  | MultiSelectFilterProps<T, C>
  | RangeFilterProps<T, C>;

export type BaseReturn = {
  reset: () => void;
  active: boolean;
};

// Define overloads for the useFilter function
export function useFilter<C>(
  props: SearchFilterProps<string, C>
): BaseReturn & {
  type: 'search';
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  config?: C;
  setConfig: React.Dispatch<React.SetStateAction<C>>;
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

export function useFilter<T extends string | number>(
  props: RangeFilterProps<T>
): BaseReturn & {
  type: 'range';
  value: [T, T] | null;
  setValue: React.Dispatch<React.SetStateAction<[T, T] | null>>;
};

// Implement the useFilter function
export function useFilter<T, C = unknown>(props: UseFilterProps<T, C>): any {
  const { name, type, parseBuilder } = props;
  const [config, setConfig] = useState(props?.config);
  const [value, setValue] = useQueryState(
    name,
    parseBuilder?.withOptions?.({ throttleMs: 1000, clearOnDefault: true })
  );

  const reset = () => {
    setValue(null);
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
      setValue: setValue as React.Dispatch<React.SetStateAction<string>>,
      config: config as C,
      setConfig: setConfig as React.Dispatch<React.SetStateAction<C>>
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
