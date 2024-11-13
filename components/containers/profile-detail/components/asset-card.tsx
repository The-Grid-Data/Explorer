'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { paths } from '@/lib/routes/paths';
import { DeepLinkBadge } from '@/components/ui/deep-link-badge';
import { ProfileDataCard } from './profile-data-card';
import { FileCode2, Package } from 'lucide-react';
import { IconLink } from '@/components/ui/icon-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@radix-ui/react-separator';
import { CardTitle } from '@/components/ui/card';

export type Profile = GetProfileQuery['profiles'][0];
export type Asset = Profile['assets'][0];
export type AssetCardProps = {
  asset: Asset;
};

export const AssetCard = ({ asset }: AssetCardProps) => {
  return (
    <ProfileDataCard
      title={
        <div className="flex items-center gap-2">
          <Avatar className="h-[20px] w-[20px] rounded-xl">
            <AvatarImage
              src={asset.icon}
              alt={asset.name}
              className="object-scale-down"
            />
            <AvatarFallback className="font-bold">
              {asset.name.at(0)?.toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <CardTitle>{asset.name}</CardTitle>
          <Separator
            className="mx-2 h-[10px] rounded-lg border-[1px]"
            orientation="vertical"
          />
          {asset.urlToAssetDocs && (
            <IconLink url={asset.urlToAssetDocs} tooltipLabel="Website">
              <FileCode2
                className="text-primary hover:text-primary/60"
                size={20}
              />
            </IconLink>
          )}
        </div>
      }
      description={asset.shortDescription || 'No description available'}
      dataPoints={[
        {
          label: 'Asset Type',
          value: asset.assetType?.name || '-'
        },
        {
          label: 'Deployed on',
          value: (
            <DeepLinkBadge
              icon={<Package size={16} />}
              href={
                asset.assetDeployedOnProductId?.profile?.slug &&
                paths.profile.detail(
                  asset.assetDeployedOnProductId?.profile?.slug,
                  {
                    section: 'products'
                  }
                )
              }
              value={asset.assetDeployedOnProductId?.name}
            />
          )
        },
        {
          label: 'Address',
          fullWidth: true,
          children: asset.address ? (
            <span className="w-full break-all text-sm">{asset.address}</span>
          ) : (
            '-'
          )
        }
      ]}
    />
  );
};
