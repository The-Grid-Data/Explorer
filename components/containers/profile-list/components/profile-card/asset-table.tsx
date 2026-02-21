'use client';

import { useState } from 'react';
import { AssetFragment } from '@/components/containers/profile-detail/components/asset-card';
import { FragmentType } from '@/lib/graphql/generated';
import { AssetBadge } from './asset-badge';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

type AssetTableProps = {
  assets: FragmentType<typeof AssetFragment>[] | null | undefined;
  initialVisibleCount?: number;
};

export const AssetTable = ({
  assets,
  initialVisibleCount = 3
}: AssetTableProps) => {
  const [showAll, setShowAll] = useState(false);

  if (!assets?.length) {
    return <span className="mt-1 text-sm">-</span>;
  }

  const visibleAssets = showAll
    ? assets
    : assets.slice(0, initialVisibleCount);
  const hasMore = assets.length > initialVisibleCount;

  return (
    <div className="flex w-full flex-col">
      <div className="divide-y rounded-md border">
        <AnimatePresence>
          {visibleAssets.map((asset, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
            >
              <AssetBadge asset={asset} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {hasMore && (
        <Button
          variant="link"
          className="h-auto p-0 pt-1 text-xs"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll
            ? 'Show Less'
            : `Show ${assets.length - initialVisibleCount} More`}
        </Button>
      )}
    </div>
  );
};
