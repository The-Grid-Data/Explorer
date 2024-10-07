'use client';

import { SearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { ProfileCardDataPoint } from './profile-card-data-point';
import { ProfileCardFeature } from './profile-card-feature';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { paths } from '@/lib/routes/paths';
import { ProfileCardIconLinks } from '@/components/containers/profile-card-icon-links';

export type Profile = SearchProfilesQuery['profiles'][0];

export type ProfileCardCardProps = {
  profile: Profile;
};

export const ProfileCard = ({ profile }: ProfileCardCardProps) => {
  const validLogoUrl = profile.logo && profile.logo.startsWith('https://');

  return (
    <div className="ml-4">
      <div className="relative mt-20 rounded-lg border-2 border-primary bg-white shadow-sm">
        <div className="relative -mt-16 flex w-full flex-col items-start gap-3 lg:absolute lg:-top-16 lg:left-[-24px] lg:mt-0 lg:flex-row">
          <div className="border-1 -ml-6 w-fit shrink-0 rounded-xl  border-2 border-primary bg-white shadow-lg hover:scale-105 lg:ml-0">
            <Link href={paths.profile.detail(profile.slug)}>
              <Avatar className="h-[100px] w-[160px] min-w-[120px] rounded-xl p-2">
                {validLogoUrl && (
                  <AvatarImage
                    className="object-scale-down"
                    src={profile.logo}
                    alt={profile.name}
                  />
                )}
                <AvatarFallback className="bg-white">No logo</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div className="flex w-full flex-col gap-3 px-4 lg:mt-7 lg:p-0">
            <Link className="w-fit" href={paths.profile.detail(profile.slug)}>
              <h3 className="w-fit text-2xl font-bold hover:underline">
                {profile.name}
              </h3>
            </Link>
            <div className="flex flex-col gap-4 lg:mr-[-16px] lg:flex-row">
              <div className="w-fit flex-1">
                <ProfileCardIconLinks profile={profile} />
              </div>
              <Button className="w-full lg:w-fit" variant="default" asChild>
                <Link href={paths.profile.detail(profile.slug)}>More info</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 lg:pt-14">
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
