import { IconLink } from '@/components/ui/icon-link';
import { UrlTypeIcon, urlTypeIconMap } from './url-type-icon';
import { Separator } from '@/components/ui/separator';

type UrlType = keyof typeof urlTypeIconMap;

export type SocialUrlType = {
  url?: string | null;
  type?: string | UrlType;
};

export type UrlTypeIconLinksProps = {
  urls: SocialUrlType[][];
};

export const UrlTypeIconLinks = ({ urls }: UrlTypeIconLinksProps) => {
  return (
    <div className="flex items-center gap-2">
      {urls.map((urlList, index) => (
        <div key={index} className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            {urlList.map(
              (url, subindex) =>
                url.url && (
                  <IconLink
                    key={`${url.url}-${index}-${subindex}`}
                    url={url.url}
                    tooltipLabel={url.type}
                  >
                    <UrlTypeIcon type={url.type as UrlType} />
                  </IconLink>
                )
            )}
          </div>
          {index < urls.length - 1 && (
            <Separator
              className="mx-2 h-[10px] rounded-lg border-[1px]"
              orientation="vertical"
            />
          )}
        </div>
      ))}
    </div>
  );
};

// HELPER FUNCTIONS

type URL = {
  url?: string | null;
  urlType?: {
    name: string;
  } | null;
};

export const extractUrls = (urls?: URL[] | null): SocialUrlType[] => {
  return (
    urls
      ?.filter(url => url.urlType?.name)
      .map(url => ({
        url: url.url,
        type: url.urlType!.name
      })) ?? []
  );
};

type SocialURL = {
  name: string;
  socialType?: { name: string } | null;
  urls?: { url?: string | null }[] | null;
};

export const extractSocialUrls = (
  socialUrls?: SocialURL[] | null
): SocialUrlType[] => {
  return (
    socialUrls?.flatMap(
      item =>
        item.urls?.map(urlObj => ({
          url: urlObj.url,
          type: item.socialType?.name
        })) ?? []
    ) ?? []
  );
};
