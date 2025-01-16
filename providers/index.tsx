import { PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from './theme-provider';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

export const Providers = ({ children }: PropsWithChildren) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    enableSystem
    themes={['light', 'dark']}
    // disableTransitionOnChange
  >
    <NuqsAdapter>
      <ReactQueryProvider>
        <Toaster />
        <TooltipProvider>{children}</TooltipProvider>
      </ReactQueryProvider>
    </NuqsAdapter>
  </ThemeProvider>
);
