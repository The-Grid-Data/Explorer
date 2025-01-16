'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QueryDialogButton } from '@/components/containers/query-dialog-button';
import { siteConfig } from '@/lib/site-config';
import {
  extractSocialUrls,
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';
import { FragmentType, graphql, useFragment } from '@/lib/graphql/generated';
import { ProfileDetailQuery } from '../profile-detail';

export const ProfileHeadingFragment = graphql(`
  fragment ProfileHeadingFragment on CProfileInfos {
    logo
    name
    urls(order_by: { urlTypeId: Asc }) {
      url
      urlType {
        name
      }
    }
    root {
      socials {
        name
        socialType {
          name
        }
        urls(order_by: { urlTypeId: Asc }) {
          url
        }
      }
    }
  }
`);

export type ProfileCardCardProps = {
  profile: FragmentType<typeof ProfileHeadingFragment>;
  queryVariables?: any;
  query: string;
};

export const ProfileHeading = ({
  profile,
  queryVariables,
  query
}: ProfileCardCardProps) => {
  const profileData = useFragment(ProfileHeadingFragment, profile);
  const validLogoUrl =
    profileData?.logo && profileData.logo.startsWith('https://');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        <div className="border-1 w-fit shrink-0 rounded-xl border border-primary bg-white shadow-lg">
          <Avatar className="h-[100px] w-[220px] min-w-[120px] rounded-xl p-4">
            {validLogoUrl && (
              <AvatarImage
                className="object-scale-down"
                src={profileData?.logo}
                alt={profileData?.name}
              />
            )}
            <AvatarFallback className="bg-white">No logo</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <h3 className="text-5xl font-bold">{profileData?.name}</h3>
            <UrlTypeIconLinks
              urls={[
                extractUrls(profileData.urls),
                extractSocialUrls(profileData.root?.socials)
              ]}
            />
          </div>
          {siteConfig.displayQueries && (
            <QueryDialogButton
              variables={queryVariables}
              queryDocument={ProfileDetailQuery as unknown as string}
              buttonLabel="View query"
            />
          )}
        </div>
      </div>
    </div>
  );
};
