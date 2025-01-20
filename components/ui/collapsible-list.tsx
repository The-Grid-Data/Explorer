import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

interface CollapsibleListProps<T> {
  items?: T[] | null;
  renderItem: (item: T) => React.ReactNode;
  renderEmpty?: () => React.ReactNode;
  initialVisibleCount?: number;
}

export const CollapsibleList = <T extends unknown>({
  items,
  renderItem,
  renderEmpty = () => null,
  initialVisibleCount = 3
}: CollapsibleListProps<T>) => {
  // Move useState outside of conditional
  const [showAll, setShowAll] = useState(false);

  if (!items?.length) return renderEmpty?.();

  const visibleItems = showAll ? items : items.slice(0, initialVisibleCount);

  return (
    <div className="flex flex-wrap items-center gap-2">
      <AnimatePresence>
        {visibleItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {renderItem(item)}
          </motion.div>
        ))}
      </AnimatePresence>
      {items.length > initialVisibleCount && (
        <Button
          variant="link"
          className="p-0"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? 'Show Less'
            : `Show ${items.length - initialVisibleCount} More`}
        </Button>
      )}
    </div>
  );
};
