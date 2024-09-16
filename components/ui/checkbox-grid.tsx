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

type Option<T extends string | number> = {
  value: T;
  label: string;
  description?: string | null;
};

export type CheckboxGridProps<T extends string | number> = {
  options: Option<T>[];
  selected: T[];
  onChange: (selected: T[]) => void;
};

export default function CheckboxGrid<T extends string | number>({
  options,
  selected,
  onChange
}: CheckboxGridProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const DEFAULT_VISIBLE = isDesktop ? 30 : 10;

  const visibleItems = showAll ? options : options.slice(0, DEFAULT_VISIBLE);

  const toggleItem = useCallback(
    (value: T) => {
      if (selected.includes(value)) {
        onChange(selected.filter(item => item !== value));
      } else {
        onChange([...selected, value]);
      }
    },
    [selected, onChange]
  );

  const toggleShowAll = () => setShowAll(prev => !prev);

  return (
    <div>
      <div className="mb-6 flex flex-wrap gap-4">
        {visibleItems.map(option => (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  key={option.value.toString()}
                  variant={
                    selected.includes(option.value) ? 'outline' : 'secondary'
                  }
                  className={cn(
                    'flex items-center justify-center text-sm font-medium',
                    selected.includes(option.value)
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
      </div>
    </div>
  );
}
