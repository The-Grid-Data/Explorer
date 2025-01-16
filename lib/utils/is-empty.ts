import { isNil } from './is-nil';

export const isEmpty = (
  value: string | number | null | undefined | false
): value is null | undefined | '' => {
  if (isNil(value)) {
    return true;
  }

  if (typeof value === 'string') {
    return value.trim() === '';
  }

  if (typeof value === 'number') {
    return false;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return value === false;
};
