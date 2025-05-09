import '@/app/globals.css';

import { Archivo, DM_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import type { Metadata, Viewport } from 'next';

import { Header } from '@/components/containers/header';
import { Providers } from '@/providers';
import { Banner } from '@/components/containers/banner';
import { siteConfig } from '@/lib/site-config';
import { Analytics } from '@vercel/analytics/react';
import { Toaster } from '@/components/ui/toaster';

type TLayout = Readonly<{
  children: React.ReactNode;
}>;

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });
const dmSans = DM_Sans({ subsets: ['latin'], variable: '--font-dm-sans' });

export const metadata: Metadata = {
  title: siteConfig.metadata.title,
  description: siteConfig.metadata.description,
  icons: {
    icon: siteConfig.metadata.icon
  }
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
        <Providers>
          <Banner />
          <Header />
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
