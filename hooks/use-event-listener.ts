'use client';

import { useEffect } from 'react';

export function useEventListener(eventName: string, handler: EventListener) {
  useEffect(() => {
    // Add event listener
    window?.addEventListener(eventName, handler);

    // Remove event listener on cleanup
    return () => {
      window?.removeEventListener(eventName, handler);
    };
  }, [eventName, handler]);
}

export function dispatchCustomEvent(eventName: string, detail: any = null) {
  const event = new CustomEvent(eventName, { detail });
  window?.dispatchEvent(event);
}
