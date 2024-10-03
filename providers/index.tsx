import { PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query-provider';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Toaster } from '@/components/ui/toaster';

export const Providers = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>
    <Toaster />
    <TooltipProvider>{children}</TooltipProvider>
  </ReactQueryProvider>
);
