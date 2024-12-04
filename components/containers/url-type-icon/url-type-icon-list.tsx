import { IconLink } from '@/components/ui/icon-link';
import { UrlTypeIcon, urlTypeIconMap } from './url-type-icon';

type UrlType = keyof typeof urlTypeIconMap;

export type SocialUrlType = {
  url: string;
  type: string | UrlType;
};

export type UrlTypeIconLinksProps = {
  urls: SocialUrlType[];
};

export const UrlTypeIconLinks = ({ urls }: UrlTypeIconLinksProps) => {
  return (
    <div className="flex items-center gap-2">
      {urls.map(url => (
        <IconLink key={url.url} url={url.url} tooltipLabel={url.type}>
          <UrlTypeIcon type={url.type as UrlType} />
        </IconLink>
      ))}
    </div>
  );
};

// HELPER FUNCTIONS

type URL = {
  url: any;
  UrlType?: {
    name: any;
  } | null;
};

export const extractUrls = (urls?: URL[] | null): SocialUrlType[] => {
  return (
    urls
      ?.filter(url => url.UrlType?.name)
      .map(url => ({
        url: url.url,
        type: url.UrlType!.name
      })) ?? []
  );
};

type SocialURL = {
  name: any;
  SocialType?: { name: any } | null;
  Urls?: { url: any }[] | null;
};

export const extractSocialUrls = (
  socialUrls?: SocialURL[] | null
): SocialUrlType[] => {
  return (
    socialUrls?.flatMap(
      item =>
        item.Urls?.map(urlObj => ({
          url: urlObj.url,
          type: item.SocialType?.name
        })) ?? []
    ) ?? []
  );
};
