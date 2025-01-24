import config from '@/lib/config/config.json';
import { Config } from './config/config.schema';

export const siteConfig = config satisfies Config;
