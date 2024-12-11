'use client';

import Link from 'next/link';
import { MenuIcon } from 'lucide-react';
import { SiGithub } from 'react-icons/si';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/lib/site-config';
import { ToggleThemeButton } from './toggle-theme-button';
import { useTheme } from 'next-themes';
import { Logo } from './logo';

const learnMoreButton = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://docs.thegrid.id"
  >
    <Button className="w-full md:w-fit">Read the docs</Button>
  </Link>
);

const claimProfileButton = (
  <Link
    target="_blank"
    rel="noopener noreferrer"
    href="https://enter.thegrid.id/claimprofile"
  >
    <Button variant="outline" className="w-full md:w-fit">
      Claim your profile
    </Button>
  </Link>
);

const cloneRepoButton = (
  <Link
    href="https://github.com/The-Grid-Data/Explorer"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button className="w-full md:w-fit" variant="outline">
      <SiGithub className="mr-2" size={18} />
      Clone project
    </Button>
  </Link>
);

export const Header = () => {
  return (
    <header className="container flex w-full items-center py-4">
      <div className="w-full items-center justify-start">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>
      </div>

      <div className="hidden w-full items-center justify-end gap-2 md:flex">
        {learnMoreButton}
        {claimProfileButton}
        {cloneRepoButton}
        <ToggleThemeButton />
      </div>
      <Sheet>
        <SheetTrigger asChild className="flex w-full items-center justify-end">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <Link className="flex items-center gap-3" href="/">
            <h3 className="text-lg font-semibold tracking-tight">The Grid</h3>
            <ToggleThemeButton />
          </Link>

          <ul className="mt-4 flex flex-col gap-3">
            <li>
              <SheetTrigger asChild>{learnMoreButton}</SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>{cloneRepoButton}</SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>{claimProfileButton}</SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
};
