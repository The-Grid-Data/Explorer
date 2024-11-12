'use client';

import { GetProfileQuery } from '@/lib/graphql/generated-graphql';
import { ProfileFeature, ProfileFeatureContainer } from './profile-feature';
import {
  ProfileDataPoint,
  ProfileDataPointContainer
} from './profile-data-point';
import { FileCode2 } from 'lucide-react';
import { IconLink } from '@/components/ui/icon-link';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export type Profile = GetProfileQuery['profiles'][0];
export type Asset = Profile['assets'][0];
export type AssetCardProps = {
  asset: Asset;
};

export const AssetCard = ({ asset }: AssetCardProps) => {
  return (
    <div className="relative w-full rounded-xl border-2 border-primary bg-secondary/40 shadow-md">
      <div className="flex flex-col">
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-br-lg rounded-tl-lg bg-primary px-4 py-2">
            <Avatar className="h-[20px] w-[20px] rounded-xl">
              <AvatarImage
                className="object-scale-down"
                src={asset.icon}
                alt={asset.name}
              />
              <AvatarFallback className="bg-white font-bold">
                {asset.name.at(0)?.toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <h3 className="text-l  text-secondary">{asset.name}</h3>
          </div>
          {asset.urlToAssetDocs && (
            <IconLink url={asset.urlToAssetDocs} tooltipLabel="Website">
              <FileCode2
                className="text-primary hover:text-primary/60"
                size={20}
              />
            </IconLink>
          )}
        </div>
        <div className="space-y-2 p-4">
          <p className="text pb-2 text-sm">
            {asset.shortDescription || 'No description avaliable'}
          </p>
          <ProfileFeatureContainer>
            <ProfileFeature label="Asset type" value={asset.assetType?.name} />
          </ProfileFeatureContainer>
          <div className="space-y-2">
            <ProfileDataPointContainer>
              <ProfileDataPoint
                fullWidth
                label="Deployed on"
                value={asset.assetDeployedOnProductId?.name}
              />
              <ProfileDataPoint
                fullWidth
                label="Address"
                value={asset.address}
                opts={{ breakAll: true }}
              />
            </ProfileDataPointContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
