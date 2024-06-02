'use client';

import { SearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { ProfileCardDataPoint } from './profile-card-data-point';
import Image from 'next/image';
import { ProfileCardFeature } from './profile-card-feature';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ProfileCardIconLinks } from './profile-card-icon-links';

export type Profile = SearchProfilesQuery['profiles'][0];

export type ProfileCardCardProps = {
  profile: Profile;
};

export const ProfileCard = ({ profile }: ProfileCardCardProps) => {
  const validLogoUrl = profile.logo && profile.logo.startsWith('https://');

  return (
    <div>
      <div className="relative mt-20 rounded-lg border-2 border-primary bg-white shadow-sm">
        <div className="absolute -top-20 left-[-12px] flex w-full items-start gap-4 md:left-[-24px]">
          <div className="border-1 w-fit shrink-0 -rotate-3 rounded-2xl  border border-primary bg-white shadow-lg">
            <Avatar className="h-[120px] w-fit min-w-[120px] max-w-[300px] rounded-2xl p-2">
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
          <div className="mt-10 flex w-full flex-col gap-5">
            <h3 className="text-2xl font-bold">{profile.name}</h3>
            <ProfileCardIconLinks profile={profile} />
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 pt-14">
          <div className="flex flex-wrap gap-2">
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
          <div className="space-y-2">
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
