import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import { cn } from '@/lib/utils';
import pluralize from 'pluralize';
import { FilterContainer, useFilterContainer } from './filter-container';
import { useRef } from 'react';

type Option<T> = {
  value: T;
  label: string;
  description?: string | null;
};

export type ComboBoxProps<T> = {
  label: string;
  options?: Option<T>[];
  selected?: T[];
  onChange: (selected: NonNullable<Option<T>['value']>[]) => void;
};

export function ComboBox<T>({
  label,
  options = [],
  selected = [],
  onChange
}: ComboBoxProps<T>) {
  const nrOfSelectedOptions = selected?.length ?? 0;
  const validOptions = options?.filter(item => item && item.label !== '') ?? [];

  return (
    <FilterContainer
      label={label}
      badgeContent={nrOfSelectedOptions > 0 && `${nrOfSelectedOptions}`}
      active={selected?.length > 0}
    >
      <div className="flex flex-col md:min-w-[480px]">
        <OptionList
          label={label}
          selected={selected as NonNullable<Option<T>['value']>[]}
          options={validOptions as Option<NonNullable<T>>[]}
          onChange={onChange}
        />
      </div>
    </FilterContainer>
  );
}

export type OptionListProps<T> = {
  label: string;
  options?: Option<T>[] | null;
  selected?: T[];
  onChange: (selected: T[]) => void;
};
export const OptionList = <T,>({
  label,
  onChange,
  options = [],
  selected = []
}: OptionListProps<T>) => {
  const nrOfSelectedOptions = selected?.length ?? 0;
  const { setOpen } = useFilterContainer();
  const listRef = useRef<HTMLDivElement>(null);
  const scrollId = useRef<ReturnType<typeof setTimeout>>();

  return (
    <>
      <Command>
        <CommandInput
          onValueChange={() => {
            clearTimeout(scrollId.current);
            scrollId.current = setTimeout(() => {
              const div = listRef.current;
              div?.scrollTo({ top: 0 });
            }, 0);
          }}
          placeholder={`Filter ${label?.toLowerCase()}...`}
        />
        <CommandList ref={listRef}>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {options?.map((option, index) => (
              <CommandItem
                key={`${option.value}-${index}`}
                value={option.label}
                onSelect={() => {
                  // Determine if the option is already selected
                  const isSelected = selected?.includes(option.value);

                  // Update the selected options list
                  const updatedSelected = isSelected
                    ? selected?.filter(item => item !== option.value)
                    : [...(selected || []), option.value]; // Ensure you're adding just the value

                  // Update the state
                  onChange(updatedSelected);
                  setOpen(true);
                }}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4 flex-shrink-0',
                    selected?.includes(option.value)
                      ? 'opacity-100'
                      : 'opacity-0'
                  )}
                />
                <div>
                  <div className="text font-medium">{option.label}</div>
                  {option.description !== null && (
                    <div className="text text-sm text-muted-foreground">
                      {option.description || 'No description provided'}
                    </div>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
      <div className={cn('flex items-center border-t p-2 sm:space-x-2')}>
        <div className="flex flex-1 items-center gap-2">
          {nrOfSelectedOptions > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                options && onChange?.([]);
              }}
            >
              Deselect all
            </Button>
          )}
          {nrOfSelectedOptions < 1 && (
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                options && onChange?.(options.map(item => item.value));
              }}
            >
              Select all
            </Button>
          )}
          <div className="text text-sm text-muted-foreground">
            {nrOfSelectedOptions} out of {options?.length}{' '}
            {pluralize('option', nrOfSelectedOptions)} selected
          </div>
        </div>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </div>
    </>
  );
};
