import { z } from 'zod';
import { createParser } from 'nuqs';
import { CProfileInfosBoolExp } from '@/lib/graphql/generated/graphql';
import deepmerge from 'deepmerge';
import { FiltersStore } from '../use-profile-filters';

export const validateAndFormatOptions = <T>(options: unknown) => {
  const optionsSchema = z.array(
    z.object({
      label: z.string(),
      value: z.string(),
      description: z.string().nullable().optional(),
      count: z.number().nullable().optional()
    })
  );

  const result = optionsSchema.safeParse(options);
  const validatedOptions = result.success ? result.data : [];
  return validatedOptions.filter(item => item.label?.trim());
};

export const parseAsId = createParser({
  parse(queryValue) {
    if (!queryValue) return null;
    try {
      const decoded = decodeURIComponent(queryValue);
      return decoded;
    } catch {
      return null;
    }
  },
  serialize(value) {
    if (!value) return '';
    return encodeURIComponent(value.toString());
  }
});

export const mergeConditions = (conditions: Array<object>) => {
  return deepmerge.all(conditions);
};
