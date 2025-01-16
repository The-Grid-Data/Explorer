'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useState } from 'react';
import { useEventListener } from '@/hooks/use-event-listener';
import { ProfileListFiltersList } from './profile-list-filters-list';

export const ProfileListFilters = () => {
  const [open, setOpen] = useState(false);

  useEventListener('close-dialog', () => {
    setOpen(false);
  });

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <div className="w-full md:w-fit">
          <Button className="flex w-full shrink-0 gap-2">
            <Filter className="h-3.5 w-3.5" />
            <span>Advanced filters</span>
          </Button>
        </div>
      </SheetTrigger>

      <SheetContent side="left">
        <ScrollArea className="h-full">
          <div className="space-y-8 pr-4">
            <h3 className="text-2xl font-semibold tracking-tight">Filters</h3>
            <ProfileListFiltersList />
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
