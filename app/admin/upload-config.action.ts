'use server';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function uploadJson(data: any) {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const filename = 'config.json';
  const { url } = await put(filename, blob, {
    access: 'public',
    addRandomSuffix: false,
    cacheControlMaxAge: 0
  });
  revalidatePath('/');
  return url;
}
