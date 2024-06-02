import '@/app/globals.css';

import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';

import { Header } from '@/components/containers/header';
import { Providers } from '@/providers';
import { Banner } from '@/components/containers/banner';

type TLayout = Readonly<{
  children: React.ReactNode;
}>;

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Grid | Data Explorer',
  description:
    'Powering Discoverability of Assets, Products, and Services in Web3.'
};

export default function Layout({ children }: TLayout) {
  return (
    <html lang="en" className="h-full">
      <body className={cn(inter.className, 'h-full ')}>
        <Providers>
          <Banner />
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
