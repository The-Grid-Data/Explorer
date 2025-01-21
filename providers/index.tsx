'use client';

import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { PropsWithChildren } from 'react';
import { ClerkProviderWrapper } from './clerk-provider';
import { ReactQueryProvider } from './react-query-provider';
import { ThemeProvider } from './theme-provider';

export const Providers = ({ children }: PropsWithChildren) => (
  <ClerkProviderWrapper>
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      themes={['light', 'dark']}
    >
      <NuqsAdapter>
        <ReactQueryProvider>
          <Toaster />
          <TooltipProvider>{children}</TooltipProvider>
        </ReactQueryProvider>
      </NuqsAdapter>
    </ThemeProvider>
  </ClerkProviderWrapper>
);
