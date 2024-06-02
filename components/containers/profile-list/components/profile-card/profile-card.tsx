'use client';

import { SearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { ProfileCardDataPoint } from './profile-card-data-point';
import Image from 'next/image';
import { ProfileCardFeature } from './profile-card-feature';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type Profile = SearchProfilesQuery['profiles'][0];

export type ProfileCardCardProps = {
  profile: Profile;
};

export const ProfileCard = ({ profile }: ProfileCardCardProps) => {
  const validLogoUrl = profile.logo && profile.logo.startsWith('https://');

  return (
    <div>
      <div className="relative mt-20 rounded-lg border-2 border-foreground shadow-lg">
        <div className="absolute -top-12 left-[-2px] flex w-full items-start gap-2">
          <div className="w-fit shrink-0 rounded-sm bg-foreground p-2">
            <Avatar className="h-[100px] w-fit min-w-[100px] max-w-[300px] rounded-none bg-white p-2">
              {validLogoUrl && (
                <AvatarImage
                  className="object-scale-down"
                  src={profile.logo}
                  alt="@shadcn"
                />
              )}
              <AvatarFallback className="bg-white">No logo</AvatarFallback>
            </Avatar>
          </div>
          <div className="mt-2 w-full border-black">
            <h3 className="text-2xl font-semibold">{profile.name}</h3>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 pt-20">
          <div className="flex gap-2">
            <ProfileCardFeature
              label="Sector"
              value={profile.profileSector?.name}
            />
            <ProfileCardFeature
              label="Profile type"
              value={profile.profileType?.name}
            />
            <ProfileCardFeature
              label="Main Product Type"
              value={profile.mainProduct.at(0)?.productType?.name}
            />
            <ProfileCardFeature
              label="Status"
              value={profile.profileStatus?.name}
            />
            <ProfileCardFeature
              label="Issued Assets"
              value={
                Boolean(profile.assets.length) &&
                profile.assets.map(asset => asset.ticker).join(', ')
              }
            />
          </div>
          <div className="space-y-1">
            <ProfileCardDataPoint label="Tagline" value={profile.tagLine} />
            <ProfileCardDataPoint
              label="Short Description"
              value={profile.descriptionShort}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
