import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

export type Option = {
  id: string;
  label: string;
  value: string;
};

type SelectFieldProps = {
  value?: string;
  placeholder?: string;
  options: Option[];
  onChange: (value: string) => void;
  defaultValue: string;
};

export function SelectField({
  placeholder,
  value,
  onChange,
  defaultValue,
  options
}: SelectFieldProps) {
  return (
    <Select onValueChange={onChange} defaultValue={defaultValue} value={value}>
      <SelectTrigger className="data-[placeholder]:text-muted-foreground">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map(option => (
          <SelectItem key={option.id} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
