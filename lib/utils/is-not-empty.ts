export const isNotEmpty = (
  value: string | number | Array<string | number> | null
): value is string | number | Array<string | number> => {
  if (typeof value === 'string' || Array.isArray(value)) {
    return value.length > 0;
  }
  return value !== null && value !== undefined;
};
