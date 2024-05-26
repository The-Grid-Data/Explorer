import { PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query-provider';

export const Providers = ({ children }: PropsWithChildren) => (
  <ReactQueryProvider>{children}</ReactQueryProvider>
);
