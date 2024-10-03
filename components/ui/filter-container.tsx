'use client';

import { PropsWithChildren, createContext, useContext, useState } from 'react';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Button } from '@/components/ui/button';
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer';
import { Dialog, DialogContent, DialogTrigger } from './dialog';
import { cn } from '@/lib/utils';
import { Badge } from './badge';
import { useEventListener } from '@/hooks/use-event-listener';

export type FilterContainerProps = PropsWithChildren<{
  label: string;
  badgeContent?: string | boolean;
  active?: boolean;
}>;

export function FilterContainer({
  label,
  active,
  badgeContent,
  children
}: FilterContainerProps) {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEventListener('close-dialog', () => {
    setOpen(false);
  });

  const triggerButton = (
    <Button
      variant="outline"
      className={cn(
        'justify-between font-normal text-muted-foreground',
        active && 'border-2 border-primary font-medium text-primary'
      )}
    >
      {label}
      {badgeContent && (
        <Badge className="text px-[8px] py-[2px] text-[10px] leading-3">
          {badgeContent}
        </Badge>
      )}
    </Button>
  );

  if (isDesktop) {
    return (
      <FilterContainerContext.Provider value={{ open, setOpen }}>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>{triggerButton}</DialogTrigger>
          <DialogContent className="w-fit gap-0 rounded-md p-0">
            {children}
          </DialogContent>
        </Dialog>
      </FilterContainerContext.Provider>
    );
  }

  return (
    <FilterContainerContext.Provider value={{ open, setOpen }}>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>{triggerButton}</DrawerTrigger>
        <DrawerContent>
          <div className="mt-4 border-t">{children}</div>
        </DrawerContent>
      </Drawer>
    </FilterContainerContext.Provider>
  );
}

type FilterContainerContextProps = {
  setOpen: (value: boolean) => void;
  open: boolean;
};

const FilterContainerContext =
  createContext<FilterContainerContextProps | null>(null);

export function useFilterContainer() {
  const context = useContext(FilterContainerContext);

  if (!context) {
    throw new Error(
      'useFilterContainer must be used within a <FilterContainer />'
    );
  }

  return context;
}
