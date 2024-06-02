import { PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query-provider';
import { TooltipProvider } from '@/components/ui/tooltip';

export const Providers = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>
    <TooltipProvider>{children}</TooltipProvider>
  </ReactQueryProvider>
);
