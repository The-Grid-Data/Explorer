import { useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { cn, isNil } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { Skeleton } from './skeleton';
import { CollapsibleList } from './collapsible-list';

type Option<T extends string | number> = {
  value: T;
  label: string;
  description?: string | null;
  count?: string | number | null;
  disabled?: boolean;
};

export type CheckboxGridProps<T extends string | number> = {
  options: Option<T>[];
  selected: T[] | null;
  onChange: (selected: T[]) => void;
  isLoading?: boolean;
  isFetching?: boolean;
  initialVisibleCount?: number;
};

export default function CheckboxGrid<T extends string | number>({
  options,
  selected,
  onChange,
  isLoading,
  isFetching,
  initialVisibleCount = 30
}: CheckboxGridProps<T>) {
  const toggleItem = useCallback(
    (value: T) => {
      if (selected?.includes(value)) {
        onChange(selected.filter(item => item !== value));
      } else {
        onChange([...(selected ?? []), value]);
      }
    },
    [selected, onChange]
  );

  const orderedOptions = useMemo(() => {
    if (!selected?.length) return options;
    const selectedSet = new Set(selected);
    const selectedItems = options.filter(o => selectedSet.has(o.value));
    const unselectedItems = options.filter(o => !selectedSet.has(o.value));
    return [...selectedItems, ...unselectedItems];
  }, [options, selected]);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-2">
        {isLoading ? (
          <>
            {new Array(12).fill(null).map((_, index) => (
              <Skeleton key={index} className="h-8 w-32" />
            ))}
          </>
        ) : options.length < 1 ? (
          <p className="text-center text-muted-foreground">
            No data was found.
          </p>
        ) : (
          <div
            className={cn(
              'flex flex-wrap gap-2',
              isFetching && 'animate-pulse'
            )}
          >
            <CollapsibleList
              items={orderedOptions}
              initialVisibleCount={initialVisibleCount}
              minVisibleCount={selected?.length ?? 0}
              getKey={option => String(option.value)}
              renderEmpty={() => null}
              renderItem={option => {
                const isSelected = selected?.includes(option.value);
                return (
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          disabled={option.disabled || isFetching}
                          variant={isSelected ? 'outline' : 'secondary'}
                          className={cn(
                            'flex items-center justify-center gap-2 text-sm font-medium transition-opacity duration-300',
                            isSelected
                              ? 'border-2 border-primary text-primary'
                              : 'text-secondary-foreground'
                          )}
                          onClick={() => toggleItem(option.value)}
                        >
                          <span>{option.label}</span>
                          {!isNil(option.count) && (
                            <span
                              className={cn(
                                'text-[10px]',
                                isSelected
                                  ? 'text-primary/40'
                                  : 'text-muted-foreground/50'
                              )}
                            >
                              {option.count}
                            </span>
                          )}
                        </Button>
                      </TooltipTrigger>
                      {option.description && (
                        <TooltipContent className="max-w-64 text-base">
                          <p>{option.description}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                );
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}
