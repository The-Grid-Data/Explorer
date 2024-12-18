import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import {
  __TypeKind,
  GetOrderByFieldsQuery,
  OrderBy,
  useGetOrderByFieldsQuery
} from '@/lib/graphql/generated-graphql';
import { Sorting } from '../../hooks/use-profile-sorting';
import { memo, useMemo, useState } from 'react';
import { Label } from '@/components/ui/label';
import { useProfileSortingContext } from '@/providers/sorting-provider';
import { Check, ChevronsUpDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ProfileListSortingComponent = () => {
  const { data } = useGetOrderByFieldsQuery({
    name: 'CProfileInfosOrderBy'
  });

  const { sorting } = useProfileSortingContext();
  const [openSortBy, setOpenSortBy] = useState(false);
  const [openSortOrder, setOpenSortOrder] = useState(false);

  const options = useMemo(() => extractOrderByOptions(data), [data]);

  return (
    <div className="flex w-full flex-col justify-end gap-4 md:flex-row">
      <div className="flex flex-col gap-1">
        <Label className="text-xs">Sort by</Label>
        <Popover open={openSortBy} onOpenChange={setOpenSortBy}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openSortBy}
              className="w-full justify-between md:w-[180px]"
            >
              <span className="truncate">
                {sorting.sortBy || 'Select field...'}
              </span>
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search fields..." />
              <CommandEmpty>No field found.</CommandEmpty>
              <CommandGroup>
                <CommandList>
                  {options.map(item => (
                    <CommandItem
                      key={item}
                      value={item}
                      onSelect={value => {
                        sorting.setSortBy(value);
                        setOpenSortBy(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          sorting.sortBy === item ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      {item}
                    </CommandItem>
                  ))}
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex flex-col gap-1">
        <Label className="text-xs">Sort order</Label>
        <Popover open={openSortOrder} onOpenChange={setOpenSortOrder}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={openSortOrder}
              className="w-full justify-between md:w-[130px]"
            >
              {sorting.sortOrder === OrderBy.Asc ? 'Ascending' : 'Descending'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0 md:w-[130px]">
            <Command>
              <CommandGroup>
                <CommandList>
                  <CommandItem
                    value={OrderBy.Asc}
                    onSelect={() => {
                      sorting.setSortOrder(OrderBy.Asc);
                      setOpenSortOrder(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        sorting.sortOrder === OrderBy.Asc
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                    Ascending
                  </CommandItem>
                  <CommandItem
                    value={OrderBy.Desc}
                    onSelect={() => {
                      sorting.setSortOrder(OrderBy.Desc);
                      setOpenSortOrder(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        sorting.sortOrder === OrderBy.Desc
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                    Descending
                  </CommandItem>
                </CommandList>
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

const extractOrderByOptions = (data?: GetOrderByFieldsQuery): string[] => {
  const fields = data?.__type?.inputFields || [];
  let options: string[] = [];

  const extractFields = (
    fieldList: Array<{ name: string; type: any }>,
    prefix: string = ''
  ): void => {
    fieldList.forEach(field => {
      const fieldName = prefix ? `${prefix}.${field.name}` : field.name;
      if (field.type?.inputFields && field.type.inputFields.length > 0) {
        extractFields(field.type.inputFields, fieldName);
      } else if (
        field.type?.ofType?.inputFields &&
        field.type.ofType.inputFields.length > 0
      ) {
        extractFields(field.type.ofType.inputFields, fieldName);
      } else {
        options.push(fieldName);
      }
    });
  };

  extractFields(fields);
  return options.sort((a, b) => {
    if (a.split('.').length < b.split('.').length) {
      return -1;
    }

    return 0;
  });
};

export const ProfileListSorting = memo(ProfileListSortingComponent);
