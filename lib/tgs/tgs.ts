import tgs from './tgs.json';
import { z } from 'zod';

const tgsObject = tgs['id.thegrid.tgs-007'];
const tgsFieldDataSchema = z
  .discriminatedUnion('is_enum', [
    z.object({
      parameter_id: z.string(),
      description: z.string(),
      is_enum: z.literal('true'),
      possible_values: z.array(
        z.object({
          id: z.coerce.string(),
          name: z.string().transform(val => val.trim() || ' - '),
          definition: z.string()
        })
      )
    }),
    z.object({
      parameter_id: z.string(),
      description: z.string(),
      is_enum: z.literal('false'),
      possible_values: z.undefined()
    })
  ])
  .refine(
    data => data.is_enum === 'false' || Array.isArray(data.possible_values),
    { message: "possible_values must be present when is_enum is 'true'" }
  );

export type TgsFieldData = z.infer<typeof tgsFieldDataSchema>;

type RemovePrefix<S extends string> =
  S extends `id.thegrid.tgs-007.${infer Rest}` ? Rest : S;

export type TgsFieldNames = RemovePrefix<keyof typeof tgsObject>;

export const getTgsData = <T extends TgsFieldNames>(
  field: T
):
  | (TgsFieldData & { isDataValid: true })
  | { isDataValid: false; errorMessage: string } => {
  const data = tgsObject[`id.thegrid.tgs-007.${field}`];
  const result = tgsFieldDataSchema.safeParse(data);
  if (!result.success) {
    return {
      isDataValid: false,
      errorMessage: result.error.message
    };
  }
  return {
    ...result.data,
    isDataValid: true
  };
};
