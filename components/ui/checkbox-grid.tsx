// Start of Selection
import { useState, useCallback, useMemo } from 'react';
import { Button } from '@/components/ui/button';
import { cn, isNil } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Skeleton } from './skeleton';
import { motion, AnimatePresence } from 'framer-motion';

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
};

export default function CheckboxGrid<T extends string | number>({
  options,
  selected,
  onChange,
  isLoading
}: CheckboxGridProps<T>) {
  const [showAll, setShowAll] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const DEFAULT_VISIBLE = useMemo(() => (isDesktop ? 30 : 10), [isDesktop]);

  const visibleItems = useMemo(
    () => (showAll ? options : options.slice(0, DEFAULT_VISIBLE)),
    [showAll, options, DEFAULT_VISIBLE]
  );

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

  const toggleShowAll = useCallback(() => setShowAll(prev => !prev), []);

  const containerVariants = useMemo(
    () => ({
      visible: {
        transition: {
          staggerChildren: 0.05
        }
      },
      hidden: {},
      exit: {
        transition: {
          staggerChildren: 0.05
        }
      }
    }),
    []
  );

  const itemVariants = useMemo(
    () => ({
      hidden: { opacity: 0, y: 10, rotate: -5 },
      visible: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.15 } },
      exit: { opacity: 0, y: -20, rotate: 5, transition: { duration: 0.15 } }
    }),
    []
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
        ) : visibleItems.length < 1 ? (
          <p className="text-center text-muted-foreground">
            No data was found.
          </p>
        ) : (
          <>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-wrap gap-4"
            >
              <AnimatePresence>
                {visibleItems.map(option => (
                  <TooltipProvider key={option.value.toString()}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <motion.div
                          variants={itemVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                        >
                          <Button
                            disabled={option.disabled}
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
                        </motion.div>
                      </TooltipTrigger>
                      {option.description && (
                        <TooltipContent className="max-w-64 text-base">
                          <p>{option.description}</p>
                        </TooltipContent>
                      )}
                    </Tooltip>
                  </TooltipProvider>
                ))}
              </AnimatePresence>
            </motion.div>
            {options.length > DEFAULT_VISIBLE && (
              <Button variant="link" onClick={toggleShowAll}>
                {showAll ? 'Show Less' : 'Show More'}
              </Button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
