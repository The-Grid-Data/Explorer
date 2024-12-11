'use client';

import {
  GetProfileDocument,
  GetProfileQuery
} from '@/lib/graphql/generated-graphql';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { QueryDialogButton } from '@/components/containers/query-dialog-button';
import { siteConfig } from '@/lib/site-config';
import {
  extractSocialUrls,
  extractUrls,
  UrlTypeIconLinks
} from '@/components/containers/url-type-icon/url-type-icon-list';

export type Profile = NonNullable<GetProfileQuery['profileInfos']>[number];

export type ProfileCardCardProps = {
  profile: Profile;
  queryVariables?: Record<string, any>;
};

export const ProfileHeading = ({
  profile,
  queryVariables
}: ProfileCardCardProps) => {
  const validLogoUrl = profile.logo && profile.logo.startsWith('https://');

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center">
        <div className="border-1 w-fit shrink-0 rounded-xl border border-primary bg-white shadow-lg">
          <Avatar className="h-[100px] w-[220px] min-w-[120px] rounded-xl p-4">
            {validLogoUrl && (
              <AvatarImage
                className="object-scale-down"
                src={profile.logo}
                alt={profile.name}
              />
            )}
            <AvatarFallback className="bg-white">No logo</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col gap-4 md:gap-2">
          <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <h3 className="text-5xl font-bold">{profile.name}</h3>
            <UrlTypeIconLinks
              urls={[
                extractUrls(profile.urls),
                extractSocialUrls(profile.root?.socials)
              ]}
            />
          </div>
          {siteConfig.displayQueries && (
            <QueryDialogButton
              variables={queryVariables}
              queryDocument={GetProfileDocument}
              buttonLabel="View query"
            />
          )}
        </div>
      </div>
    </div>
  );
};
