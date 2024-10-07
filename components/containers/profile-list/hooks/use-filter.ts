import { useState } from 'react';

type Options<T> = Array<{
  label: string;
  value: T;
  description?: string | null;
}>;

// Define the types for search and select filter props
type BaseFilterProps<T, C = unknown> = {
  initialValue?: T;
  onChange?: (newValue: T) => void;
  config?: C;
};

export type SearchFilterProps<C = unknown> = BaseFilterProps<string, C> & {
  type: 'search';
};

export type SelectFilterProps<T> = BaseFilterProps<T | null> & {
  type: 'select';
  options?: Options<T>;
};

export type MultiSelectFilterProps<T> = BaseFilterProps<T[]> & {
  type: 'multiselect';
  options?: Options<T>;
};

export type RangeFilterProps<T> = BaseFilterProps<[T, T] | null> & {
  type: 'range';
};

export type UseFilterProps<T, C = unknown> =
  | SearchFilterProps<C>
  | SelectFilterProps<T>
  | MultiSelectFilterProps<T>
  | RangeFilterProps<T>;

export type BaseReturn = {
  reset: () => void;
  active: boolean;
};

// Define overloads for the useFilter function
export function useFilter<C>(props: SearchFilterProps<C>): BaseReturn & {
  type: 'search';
  value: string;
  setValue: (newValue: string) => void;
  config?: C;
  setConfig: React.Dispatch<React.SetStateAction<C>>;
};

export function useFilter<T>(props: SelectFilterProps<T>): BaseReturn & {
  type: 'select';
  value: T | null;
  options?: Options<T>;
  setValue: (newValue: T | null) => void;
};

export function useFilter<T>(props: MultiSelectFilterProps<T>): BaseReturn & {
  type: 'multiselect';
  value: T[];
  options?: Options<T>;
  setValue: (newValue: T[]) => void;
};

export function useFilter<T>(props: RangeFilterProps<T>): BaseReturn & {
  type: 'range';
  value: [T, T] | null;
  setValue: (newValue: [T, T] | null) => void;
};

// Implement the useFilter function
export function useFilter<T, C = unknown>(props: UseFilterProps<T, C>): any {
  const { initialValue, type, onChange } = props;

  const [value, _setValue] = useState<any>(initialValue);
  const [config, setConfig] = useState<C>(props.config as C);

  const setValue = (newValue: any) => {
    _setValue(newValue);
    onChange?.(newValue);
  };

  const reset = () => {
    setValue(null);
  };

  const base = {
    reset,
    type
  };

  if (type === 'search') {
    return {
      ...base,
      active: value?.length > 0,
      value: value as string,
      setValue: setValue as (newValue: string) => void,
      config,
      setConfig
    };
  }

  if (type === 'select') {
    return {
      ...base,
      active: value != null,
      value: value as T | null,
      options: (props as SelectFilterProps<T>).options,
      setValue: setValue as (newValue: T | null) => void
    };
  }

  if (type === 'multiselect') {
    return {
      ...base,
      active: (value as T[])?.length > 0,
      value: value as T[],
      options: (props as MultiSelectFilterProps<T>).options,
      setValue: setValue as (newValue: T[]) => void
    };
  }

  if (type === 'range') {
    return {
      ...base,
      active: value != null && (value as [T, T]).every(i => i != null),
      value: value as [T, T] | null,
      setValue: setValue as (newValue: [T, T] | null) => void
    };
  }

  throw new Error('Invalid filter type');
}
