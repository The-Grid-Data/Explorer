'use client';

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import { useFormField } from '@/components/ui/form';
import { getTgsData, TgsFieldNames } from '@/lib/tgs';
import { SelectField } from './select-field';
import { Input } from '@/components/ui/input';

type TgsSFieldProps = {
  label: string;
  placeholder?: string;
  tgsField: TgsFieldNames;
  fieldName?: string;
};

export function TgsField({
  label,
  placeholder,
  tgsField,
  fieldName
}: TgsSFieldProps) {
  const tgsData = getTgsData(tgsField);
  const field = useFormField();

  if (tgsData.isDataValid === false) {
    return (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <FormMessage>
          There was an error loading the form field for {tgsField}
        </FormMessage>
        <pre>
          <FormMessage>{tgsData.errorMessage}</FormMessage>
        </pre>
      </FormItem>
    );
  }

  if (tgsData.isDataValid === true) {
    return (
      <>
        {tgsData.is_enum === 'true' && (
          <FormField
            {...field}
            name={tgsField ?? fieldName}
            render={({ field: formField }) => (
              <FieldWrapper label={label} description={tgsData.description}>
                <SelectField
                  {...formField}
                  defaultValue={formField.value}
                  placeholder={placeholder}
                  onChange={formField.onChange}
                  value={formField.value}
                  options={tgsData.possible_values.map(value => ({
                    id: value.id,
                    label: value.name,
                    value: value.id
                  }))}
                />
              </FieldWrapper>
            )}
          />
        )}

        {tgsData.is_enum === 'false' && (
          <FormField
            {...field}
            name={tgsField ?? fieldName}
            render={({ field: formField }) => (
              <FieldWrapper label={label} description={tgsData.description}>
                <Input
                  {...formField}
                  value={formField.value}
                  placeholder={placeholder}
                />
              </FieldWrapper>
            )}
          />
        )}
      </>
    );
  }

  return null;
}

const FieldWrapper = ({
  children,
  label,
  description
}: {
  children: React.ReactNode;
  label: string;
  description: string;
}) => {
  return (
    <FormItem>
      <FormLabel>{label}</FormLabel>
      <FormControl>{children}</FormControl>
      <FormDescription>{description}</FormDescription>
      <FormMessage />
    </FormItem>
  );
};
