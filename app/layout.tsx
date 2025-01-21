import '@/app/globals.css';

import { cn } from '@/lib/utils';
import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata, Viewport } from 'next';
import { Archivo, DM_Sans } from 'next/font/google';

import { Banner } from '@/components/containers/banner';
import { Header } from '@/components/containers/header';
import { siteConfig } from '@/lib/site-config';
import { Providers } from '@/providers';
import { Analytics } from '@vercel/analytics/react';

type TLayout = Readonly<{
  children: React.ReactNode;
}>;

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: siteConfig.pageTitle,
  description: siteConfig.pageDescription
};

export const viewport: Viewport = {
  initialScale: 1,
  width: 'device-width',
  maximumScale: 1,
  viewportFit: 'cover'
};

export default function Layout({ children }: TLayout) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body
        className={cn(
          dmSans.className,
          dmSans.variable,
          archivo.variable,
          'h-full '
        )}
      >
        <Analytics />
        <ClerkProvider>
          <Providers>
            <Banner />
            <Header />
            {children}
          </Providers>
        </ClerkProvider>
      </body>
    </html>
  );
}
