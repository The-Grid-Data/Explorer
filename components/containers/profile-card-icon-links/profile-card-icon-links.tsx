import { Globe, Rss, FileText, FileCode2 } from 'lucide-react';
import Link from 'next/link';
import { PropsWithChildren } from 'react';
import { SiX, SiDiscord, SiLinkedin, SiTelegram } from 'react-icons/si';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';

export type ProfileCardFeatureProps = {
  profile: {
    urlMain: string;
    urlBlog: string;
    urlWhitepaper: string;
    urlDocumentation: string;
    socials: Array<{
      url: string;
      socialType?: { name: string } | null;
    }>;
  };
};

const iconFilledClassName = 'fill-primary hover:fill-primary/60';
const iconBorderedClassName = 'text-primary hover:text-primary/60';

const socialsIconMap = {
  'Twitter / X': <SiX className={iconFilledClassName} size={16} />,
  Discord: <SiTelegram className={iconFilledClassName} size={16} />,
  LinkedIn: <SiLinkedin className={iconFilledClassName} size={16} />,
  Telegram: <SiDiscord className={iconFilledClassName} size={16} />
} as const;

export const ProfileCardIconLinks = ({ profile }: ProfileCardFeatureProps) => {
  return (
    <div className="flex items-center gap-2">
      {profile.urlMain && (
        <IconLink url={profile.urlMain} tooltipLabel="Website">
          <Globe className={iconBorderedClassName} size={20} />
        </IconLink>
      )}
      {profile.urlBlog && (
        <IconLink url={profile.urlBlog} tooltipLabel="Blog">
          <Rss className={iconBorderedClassName} size={20} />
        </IconLink>
      )}
      {profile.urlWhitepaper && (
        <IconLink url={profile.urlWhitepaper} tooltipLabel="White Paper">
          <FileText className={iconBorderedClassName} size={20} />
        </IconLink>
      )}
      {profile.urlDocumentation && (
        <IconLink url={profile.urlDocumentation} tooltipLabel="Documentation">
          <FileCode2 className={iconBorderedClassName} size={20} />
        </IconLink>
      )}

      {profile.socials.length > 0 && (
        <>
          <Separator
            className="mx-2 h-[10px] rounded-lg border-[1px]"
            orientation="vertical"
          />

          {profile.socials
            .filter(social => social.socialType?.name)
            .map(social => (
              <IconLink
                key={social.url}
                url={social.url}
                tooltipLabel={social.socialType?.name}
              >
                {/* @ts-ignore */}
                {socialsIconMap[social.socialType.name]}
              </IconLink>
            ))}
        </>
      )}
    </div>
  );
};

export const IconLink = ({
  children,
  url,
  tooltipLabel
}: PropsWithChildren<{ url: string; tooltipLabel?: string }>) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger>
          <Link href={url} target="_blank" rel="noopener noreferrer">
            {children}
          </Link>
        </TooltipTrigger>
        <TooltipContent>{tooltipLabel}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
