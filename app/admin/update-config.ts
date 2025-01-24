'use server';

import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';

export async function updateConfig(data: any) {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json' });
  const filename = 'config.json';
  const { url } = await put(filename, blob, {
    access: 'public',
    addRandomSuffix: false,
    cacheControlMaxAge: 0
  });

  return { url };
}

export async function triggerRedeploy() {
  const triggerRedeployHookUrl = process.env.TRIGGER_REDEPLOY_HOOK_URL;
  if (triggerRedeployHookUrl) {
    try {
      const response = await fetch(triggerRedeployHookUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (!response.ok) {
        throw new Error('Failed to trigger redeploy');
      }
    } catch (error) {
      throw new Error('Failed to trigger redeploy');
    }
  } else {
    throw new Error('TRIGGER_REDEPLOY_HOOK_URL is not set');
  }
}
