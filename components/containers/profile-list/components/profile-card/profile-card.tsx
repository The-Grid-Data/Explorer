'use client';

import { SearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { ProfileCardDataPoint } from './profile-card-data-point';
import { ProfileCardFeature } from './profile-card-feature';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { paths } from '@/lib/routes/paths';
import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site-config';
import {
  extractSocialUrls,
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export type Profile = NonNullable<SearchProfilesQuery['profileInfos']>[number];

export type ProfileCardCardProps = {
  profile: Profile;
};

export const ProfileCard = ({ profile }: ProfileCardCardProps) => {
  const validLogoUrl = profile.logo && profile.logo.startsWith('https://');
  const { filters } = useProfileFiltersContext();

  return (
    <div className="ml-4">
      <div className="relative mt-20 rounded-lg border-2 border-primary bg-card text-card-foreground shadow-sm dark:border-secondary">
        <div className="relative -mt-16 flex w-full flex-col items-start gap-3 lg:absolute lg:-top-16 lg:left-[-24px] lg:mt-0 lg:flex-row">
          <div className="border-1 -ml-6 w-fit shrink-0 rounded-xl border-2 border-primary bg-white shadow-lg hover:scale-105 dark:border-secondary lg:ml-0">
            <Link href={paths.profile.detail(profile.root?.slug)}>
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
            <div className="flex flex-row gap-2">
              <Link
                className="flex w-fit items-center gap-2"
                href={paths.profile.detail(profile.root?.slug)}
              >
                <h3 className="w-fit text-2xl font-bold hover:underline">
                  {profile.name}
                </h3>
                {profile.root?.profileTags?.find(
                  tag => tag.tag?.id === siteConfig.verifiedTagId
                ) && <Badge className="w-fit">Verified</Badge>}
              </Link>
            </div>
            <div className="flex flex-col gap-4 lg:mr-[-16px] lg:flex-row">
              <div className="w-fit flex-1">
                <UrlTypeIconLinks
                  urls={[
                    extractUrls(profile.urls),
                    extractSocialUrls(profile.root?.socials)
                  ]}
                />
              </div>
              <Button className="w-full lg:w-fit" variant="default" asChild>
                <Link href={paths.profile.detail(profile.root?.slug)}>
                  More info
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 p-4 lg:pt-14">
          <div className="flex flex-wrap gap-2">
            <ProfileCardFeature
              label="Profile type"
              value={profile.profileType?.name}
              active={filters.profileTypeFilter.active}
            />
            <ProfileCardFeature
              label="Profile Sector"
              value={profile.profileSector?.name}
              active={filters.profileSectorsFilter.active}
            />
            <ProfileCardFeature
              label="Profile Status"
              value={profile.profileStatus?.name}
              active={filters.profileStatusesFilter.active}
            />
            <ProfileCardFeature
              label="Profile Founding Date"
              value={profile.foundingDate}
              active={filters.profileFoundingDateFilter.active}
            />
            <ProfileCardFeature
              label="Main Product Type"
              value={profile.mainProduct?.products?.at(0)?.productType?.name}
            />
            <ProfileCardFeature
              label="Issued Assets"
              value={
                Boolean(profile.root?.assets?.length) &&
                profile.root?.assets?.map(asset => asset.ticker).join(', ')
              }
            />
          </div>
          <div className="space-y-2">
            <ProfileCardDataPoint label="Tagline" value={profile.tagLine} />
            <ProfileCardDataPoint
              label="Short Description"
              value={profile.descriptionShort}
            />
            <ProfileCardDataPoint
              label="Tags"
              value={profile.root?.profileTags
                ?.map(tag => tag?.tag?.name)
                .filter(Boolean)
                .join(', ')}
              active={filters.tagsFilter.active}
            />
            <ProfileCardDataPoint
              label="Product types"
              value={profile.root?.products
                ?.map(product => product.productType?.name)
                .filter(Boolean)
                .join(', ')}
              active={filters.productTypesFilter.active}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
