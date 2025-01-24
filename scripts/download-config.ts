import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { getFileContent } from '@/lib/storage/blob';
import defaultConfig from '@/lib/config/default-config.json';
import { configSchema } from '@/lib/config/config.schema';

dotenv.config();

const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
const LOAD_CONFIG_FROM_VERCEL_STORAGE =
  process.env.LOAD_CONFIG_FROM_VERCEL_STORAGE;
const CONFIG_PATH = path.join(process.cwd(), 'lib', 'config', 'config.json');

export const getSiteConfig = async () => {
  const jsonString = await getFileContent('config.json');
  if (!jsonString) return null;
  return JSON.parse(jsonString);
};

async function downloadConfig() {
  if (!Boolean(LOAD_CONFIG_FROM_VERCEL_STORAGE)) {
    console.error('BLOB_READ_WRITE_TOKEN environment variable is not set');
    process.exit(0);
  }
  if (!BLOB_READ_WRITE_TOKEN) {
    console.error('BLOB_READ_WRITE_TOKEN environment variable is not set');
    process.exit(0);
  }

  try {
    const config = (await getSiteConfig()) ?? defaultConfig;

    if (!config) {
      console.error('No config found');
      process.exit(0);
    }

    const result = configSchema.safeParse(config);
    if (!result.success) {
      console.error('Config validation failed:', result.error);
      process.exit(0);
    }
    const validatedConfig = result.data;

    fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });

    fs.writeFileSync(CONFIG_PATH, JSON.stringify(validatedConfig, null, 2));
    console.log('Config file successfully downloaded to:', CONFIG_PATH);
  } catch (error) {
    console.error('Error downloading config:', error);
    process.exit(0);
  }
}

downloadConfig();
