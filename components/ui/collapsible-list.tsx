import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleListProps<T> {
  items?: T[] | null;
  renderItem: (item: T) => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
  initialVisibleCount?: number;
  minVisibleCount?: number;
  getKey?: (item: T, index: number) => string | number;
}

export const CollapsibleList = <T extends unknown>({
  items,
  renderItem,
  renderEmpty = () => null,
  initialVisibleCount = 3,
  minVisibleCount,
  getKey
}: CollapsibleListProps<T>) => {
  const [showAll, setShowAll] = useState(false);

  if (!items?.length) return renderEmpty?.();

  const effectiveVisibleCount = Math.max(
    initialVisibleCount,
    minVisibleCount ?? 0
  );
  const visibleItems = showAll
    ? items
    : items.slice(0, effectiveVisibleCount);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <AnimatePresence>
        {visibleItems.map((item, index) => (
          <motion.div
            key={getKey ? getKey(item, index) : index}
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderItem(item)}
          </motion.div>
        ))}
      </AnimatePresence>
      {items.length > effectiveVisibleCount && (
        <Button
          variant="link"
          className="p-0"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? 'Show Less'
            : `Show ${items.length - effectiveVisibleCount} More`}
        </Button>
      )}
    </div>
  );
};
