'use client';

import { AssetFragment } from '@/components/containers/profile-detail/components/asset-card';
import { AssetCard } from '@/components/containers/profile-detail/components/asset-card';
import { ItemWithSheet } from '@/components/containers/profile-detail/components/Item-with-sheet';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { FragmentType, useFragment } from '@/lib/graphql/generated';
import { findMedia } from '@/lib/utils/media-utils';

type AssetBadgeProps = {
  asset: FragmentType<typeof AssetFragment>;
};

export const AssetBadge = ({ asset: assetData }: AssetBadgeProps) => {
  const asset = useFragment(AssetFragment, assetData);

  const validIconUrl = asset.media?.find(findMedia.icon)?.url;

  return (
    <ItemWithSheet
      trigger={
        <div className="flex cursor-pointer items-center gap-3 rounded-md px-2 py-1.5 text-sm hover:bg-muted">
          <Avatar className="h-5 w-5 shrink-0 rounded-full">
            {validIconUrl && (
              <AvatarImage
                src={validIconUrl}
                alt={asset.name}
                className="object-scale-down"
              />
            )}
            <AvatarFallback className="text-[10px] font-bold">
              {asset.name?.at(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <span className="flex-1 truncate font-medium">{asset.name}</span>
          <span className="shrink-0 text-xs text-muted-foreground">
            {asset.ticker}
          </span>
          <span className="hidden shrink-0 text-xs text-muted-foreground sm:inline">
            {asset.assetType?.name}
          </span>
        </div>
      }
      content={<AssetCard variant="fluid" asset={assetData} />}
    />
  );
};
