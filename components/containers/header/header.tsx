"use client";

import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

const learnMoreButton = (
  <Link href="/contact">
    <Button>Learn more</Button>
  </Link>
);

const cloneRepoButton = (
  <Link
    href="https://github.com/thegrid/data-explorer-app"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Button variant="outline">
      <SiGithub className="mr-2" size={18} />
      Clone project
    </Button>
  </Link>
);

export const Header = () => {
  return (
    <header className="flex items-center py-4 px-4 md:container w-full">
      <div className="w-full justify-start items-center">
        <Link href="/" className="flex items-center">
          <h3 className="text-lg font-semibold tracking-tight">The Grid</h3>
        </Link>
      </div>

      <div className="w-full justify-end items-center hidden md:flex gap-2">
        {learnMoreButton}
        {cloneRepoButton}
      </div>
      <Sheet>
        <SheetTrigger asChild className="w-full flex justify-end items-center">
          <div className="w-full md:hidden">
            <Button variant="outline" size="icon">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </div>
        </SheetTrigger>

        <SheetContent>
          <SheetTrigger asChild>
            <Link className="flex items-center gap-2" href="/">
              <h3 className="text-lg font-semibold tracking-tight">The Grid</h3>
            </Link>
          </SheetTrigger>
          <ul className="flex flex-col gap-3 mt-4">
            <li>
              <SheetTrigger asChild>{learnMoreButton}</SheetTrigger>
            </li>
            <li>
              <SheetTrigger asChild>{cloneRepoButton}</SheetTrigger>
            </li>
          </ul>
        </SheetContent>
      </Sheet>
    </header>
  );
}
