'use client';

import { ClerkProvider } from '@clerk/nextjs';
import { type ReactNode } from 'react';

type AuthProviderProps = {
  children: ReactNode;
};

export function AuthProvider({ children }: AuthProviderProps) {
  return (
    <ClerkProvider
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90',
          footerActionLink: 'text-primary hover:text-primary/90'
        }
      }}
    >
      {children}
    </ClerkProvider>
  );
}
