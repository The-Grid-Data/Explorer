import { useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Skeleton } from './skeleton';

type Option<T extends string | number> = {
  value: T;
  label: string;
  description?: string | null;
};

export type CheckboxGridProps<T extends string | number> = {
  options: Option<T>[];
  selected: T[] | null;
  onChange: (selected: T[]) => void;
  isLoading?: boolean;
};

export default function CheckboxGrid<T extends string | number>({
  options,
  selected,
  onChange,
  isLoading
}: CheckboxGridProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const DEFAULT_VISIBLE = isDesktop ? 30 : 10;

  const visibleItems = showAll ? options : options.slice(0, DEFAULT_VISIBLE);

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

  const toggleShowAll = () => setShowAll(prev => !prev);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        {(() => {
          if (isLoading) {
            return (
              <>
                {new Array(12).fill(null).map((_, index) => (
                  <Skeleton key={index} className="h-8 w-32" />
                ))}
              </>
            );
          } else if (visibleItems.length < 1) {
            return (
              <p className="text-center text-muted-foreground">
                No data was found.
              </p>
            );
          } else {
            return (
              <>
                {visibleItems.map(option => (
                  <TooltipProvider key={option.value.toString()}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant={
                            selected?.includes(option.value)
                              ? 'outline'
                              : 'secondary'
                          }
                          className={cn(
                            'flex items-center justify-center text-sm font-medium',
                            selected?.includes(option.value)
                              ? 'border-2 border-primary text-primary'
                              : 'text-secondary-foreground'
                          )}
                          onClick={() => toggleItem(option.value)}
                        >
                          <span>{option.label}</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-64 text-base">
                        <p>{option.description}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                ))}
                {options.length > DEFAULT_VISIBLE && (
                  <Button variant="link" onClick={toggleShowAll}>
                    {showAll ? 'Show Less' : 'Show More'}
                  </Button>
                )}
              </>
            );
          }
        })()}
      </div>
    </div>
  );
}
