export const isNotEmpty = <T>(
  value: T | T[] | null | undefined
): value is NonNullable<T | T[]> => {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== null && value !== undefined;
};
