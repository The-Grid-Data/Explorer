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
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from '@/components/ui/dropdown-menu';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription
} from '@/components/ui/dialog';
import { Download, Eye } from 'lucide-react';
import { useState } from 'react';

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
  const [previewMedia, setPreviewMedia] = useState<{url: string, name: string} | null>(null);
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
            {profileData.media && profileData.media.length > 0 && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Eye className="mr-2 h-4 w-4" />
                    Media
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Media Preview</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {profileData.media.map((media) => (
                    <DropdownMenuItem 
                      key={media.id}
                      onClick={() => setPreviewMedia({
                        url: media.url, 
                        name: media.mediaType?.name || 'Media File'
                      })}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      {media.mediaType?.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )}
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
      
      <Dialog open={!!previewMedia} onOpenChange={() => setPreviewMedia(null)}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle>{previewMedia?.name}</DialogTitle>
            <DialogDescription>
              Preview and download media file
            </DialogDescription>
          </DialogHeader>
          {previewMedia && (
            <div className="flex justify-center">
              <img 
                src={previewMedia.url} 
                alt={previewMedia.name}
                className="max-w-full max-h-[70vh] object-contain"
              />
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setPreviewMedia(null)}>
              Close
            </Button>
            <a 
              href={previewMedia?.url} 
              download 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};
