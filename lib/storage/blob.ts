import { put } from '@vercel/blob';

export const putFile = async (path: string, data: any) => {
  const blob = await put(path, data, {
    access: 'public',
    addRandomSuffix: false,
    cacheControlMaxAge: 0
  });
  return blob;
};

export const getFileContent = async (path: string) => {
  const url = getFileUrl(path);
  if (!url) return null;
  const response = await fetch(url);
  return response.text();
};

export const getFileUrl = (path: string) => {
  const BLOB_READ_WRITE_TOKEN = process.env.BLOB_READ_WRITE_TOKEN;
  const STORE_ID = process.env.BLOB_READ_WRITE_TOKEN?.match(
    /^vercel_blob_rw_([a-z0-9]+)_[a-z0-9]+$/i
  )?.[1].toLowerCase();
  if (!BLOB_READ_WRITE_TOKEN || !STORE_ID) return null;
  const BLOB_BASE_URL = `https://${STORE_ID}.public.blob.vercel-storage.com`;
  if (!BLOB_BASE_URL) return null;
  return `${BLOB_BASE_URL}/${path}`;
};
