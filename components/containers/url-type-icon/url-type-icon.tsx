import { Globe, Rss, FileText, FileCode2, Package } from 'lucide-react';
import {
  SiX,
  SiDiscord,
  SiLinkedin,
  SiTelegram,
  SiFarcaster,
  SiGithub,
  SiReddit,
  SiFacebook,
  SiGitlab,
  SiInstagram,
  SiSubstack,
  SiTiktok,
  SiYoutube
} from 'react-icons/si';

const iconFilledClassName = 'fill-primary hover:fill-primary/60';
const iconBorderedClassName = 'text-primary hover:text-primary/60';

export const urlTypeIconMap = {
  // URL Types
  Main: <Globe className={iconBorderedClassName} size={20} />,
  Blog: <Rss className={iconBorderedClassName} size={20} />,
  Whitepaper: <FileText className={iconBorderedClassName} size={20} />,
  Documentation: <FileCode2 className={iconBorderedClassName} size={20} />,
  Product: <Globe className={iconBorderedClassName} size={20} />,
  Entity: <Globe className={iconBorderedClassName} size={20} />,

  // Social Types
  'Twitter / X': <SiX className={iconFilledClassName} size={20} />,
  Discord: <SiDiscord className={iconFilledClassName} size={20} />,
  LinkedIn: <SiLinkedin className={iconFilledClassName} size={20} />,
  Telegram: <SiTelegram className={iconFilledClassName} size={20} />,
  Warpcast: <SiFarcaster className={iconFilledClassName} size={20} />,
  GitHub: <SiGithub className={iconFilledClassName} size={20} />,
  Reddit: <SiReddit className={iconFilledClassName} size={20} />,
  Facebook: <SiFacebook className={iconFilledClassName} size={20} />,
  GitLab: <SiGitlab className={iconFilledClassName} size={20} />,
  Instagram: <SiInstagram className={iconFilledClassName} size={20} />,
  Substack: <SiSubstack className={iconFilledClassName} size={20} />,
  TikTok: <SiTiktok className={iconFilledClassName} size={20} />,
  YouTube: <SiYoutube className={iconFilledClassName} size={20} />
} as const;

type UrlTypeIconProps = {
  type: keyof typeof urlTypeIconMap;
};

export const UrlTypeIcon = ({ type }: UrlTypeIconProps) => {
  return urlTypeIconMap[type] || null;
};
