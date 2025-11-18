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
import { PoweredBy } from './powered-by';
import { ClaimedBadge } from '@/components/claim-badge';
import { MediaDropdown } from './media-dropdown';

export const ProfileHeadingFragment = graphql(`
  fragment ProfileHeadingFragment on ProfileInfos {
    name
    urls(order_by: { urlTypeId: Asc }) {
      url
      urlType {
        name
      }
    }
    media {
      id
      url
      mediaType {
        id
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
  isClaimed?: boolean;
};

export const ProfileHeading = ({
  isClaimed,
  profile,
  queryVariables,
  query
}: ProfileCardCardProps) => {
  const profileData = useFragment(ProfileHeadingFragment, profile);
  console.log({ profileData });
  const validLogoUrl = profileData.media?.find(
    m => m.mediaType?.name === 'Logo Light BG'
  )?.url;
  console.log({ validLogoUrl });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        <div className="border-1 w-fit shrink-0 rounded-xl border border-primary bg-white shadow-lg">
          <Avatar className="h-[100px] w-[220px] min-w-[120px] rounded-xl p-4">
            {validLogoUrl && (
              <AvatarImage
                className="object-scale-down"
                src={validLogoUrl}
                alt={profileData?.name}
              />
            )}
            <AvatarFallback className="bg-white">No logo</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <h3 className="text-5xl font-bold">{profileData?.name}</h3>
            {!isClaimed ? null : <ClaimedBadge />}
            <UrlTypeIconLinks
              urls={[
                extractUrls(profileData.urls),
                extractSocialUrls(profileData.root?.socials)
              ]}
            />
          </div>
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
            <MediaDropdown media={profileData.media || []} />
            {siteConfig.featureFlags?.displayQueriesButtons && (
              <QueryDialogButton
                variables={queryVariables}
                queryDocument={ProfileDetailQuery as unknown as string}
                buttonLabel="View query"
              />
            )}
            {siteConfig.featureFlags?.displayPoweredBy && <PoweredBy />}
          </div>
        </div>
      </div>
    </div>
  );
};
