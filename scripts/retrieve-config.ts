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
  let config;
  let configSource;

  if (LOAD_CONFIG_FROM_VERCEL_STORAGE === 'true') {
    if (!BLOB_READ_WRITE_TOKEN) {
      console.error(
        'BLOB_READ_WRITE_TOKEN environment variable must be set when LOAD_CONFIG_FROM_VERCEL_STORAGE is true'
      );
      process.exit(0);
    }
    config = (await getSiteConfig()) ?? defaultConfig;
    configSource = 'vercel';
  } else {
    config = defaultConfig;
    configSource = 'default-config.json';
  }

  try {
    const validatedConfig = configSchema.parse(config);

    fs.mkdirSync(path.dirname(CONFIG_PATH), { recursive: true });
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(validatedConfig, null, 2));
    console.log(
      `Config file successfully retrieved from ${configSource} and saved to:`,
      CONFIG_PATH
    );
  } catch (error) {
    console.error('Error downloading config:', error);
    process.exit(0);
  }
}

downloadConfig();
