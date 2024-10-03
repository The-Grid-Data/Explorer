'use client';

import { Calendar } from '@/components/ui/calendar';
import { FilterContainer, useFilterContainer } from './filter-container';
import { Button } from './button';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';

type Range = [string, string] | null;

export type DatePicker = {
  label: string;
  value: Range;
  onChange?: (date: Range) => void;
};

export function DatePicker({ value, onChange, label }: DatePicker) {
  const active = value?.every(i => i);
  return (
    <FilterContainer badgeContent={active && '1'} label={label} active={active}>
      <div className="flex justify-center">
        <Calendar
          captionLayout="dropdown-buttons"
          fromYear={2000}
          toYear={2024}
          mode="range"
          selected={{
            from: value?.[0] ? new Date(value[0]) : undefined,
            to: value?.[1] ? new Date(value[1]) : undefined
          }}
          onSelect={date => {
            const from = date?.from ? formatDate(date.from) : '';
            const to = date?.to ? formatDate(date.to) : '';
            onChange?.([from, to]);
          }}
          initialFocus
        />
      </div>

      <DatePickerFooter value={value} onChange={onChange} />
    </FilterContainer>
  );
}

const formatDate = (date: Date) => format(date, 'yyyy-MM-dd');

type DatePickerFooterProps = {
  value?: DatePicker['value'];
  onChange?: DatePicker['onChange'];
};

export const DatePickerFooter = ({
  onChange,
  value
}: DatePickerFooterProps) => {
  const { setOpen } = useFilterContainer();

  return (
    <div className={cn('flex flex-col items-end border-t')}>
      <div className="flex w-full flex-1 items-center gap-2 border-b p-2">
        <Button
          variant="outline"
          size="sm"
          disabled={!value}
          onClick={() => {
            onChange?.(null);
          }}
        >
          Clear
        </Button>

        <div className="text text-xs text-muted-foreground">
          From{' '}
          <span className="font-medium text-primary">{value?.[0] ?? '-'}</span>{' '}
          to{' '}
          <span className="font-medium text-primary">{value?.[1] ?? '-'}</span>
        </div>
      </div>

      <div className="p-2">
        <Button onClick={() => setOpen(false)}>Close</Button>
      </div>
    </div>
  );
};
