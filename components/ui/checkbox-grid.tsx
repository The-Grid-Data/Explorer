import { useCallback } from 'react';
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
};

export default function CheckboxGrid<T extends string | number>({
  options,
  selected,
  onChange,
  isLoading,
  isFetching
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

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
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
              'flex flex-wrap gap-4',
              isFetching && 'animate-pulse'
            )}
          >
            <CollapsibleList
              items={options}
              initialVisibleCount={30}
              renderEmpty={() => null}
              renderItem={option => (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        disabled={option.disabled || isFetching}
                        variant={
                          selected?.includes(option.value)
                            ? 'outline'
                            : 'secondary'
                        }
                        className={cn(
                          'flex items-center justify-center gap-2 text-sm font-medium transition-opacity duration-300',
                          selected?.includes(option.value)
                            ? 'border-2 border-primary text-primary'
                            : 'text-secondary-foreground'
                        )}
                        onClick={() => toggleItem(option.value)}
                      >
                        <span>{option.label}</span>
                        {!isNil(option.count) && (
                          <div className="min-w-6 rounded-md bg-primary/10 px-1 py-0 text-center text-[10px]">
                            {option.count}
                          </div>
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
              )}
            />
          </div>
        )}
      </div>
    </div>
  );
}
