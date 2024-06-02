import { Filters } from '../../hooks/use-profile-filters';
import { ProfileFilters } from './components/profile-filters';
import { ProductFilters } from './components/product-filters';
import { AssetFilters } from './components/asset-filters';
import { EntityFilters } from './components/entity-filters';
import { useMediaQuery } from '@/hooks/use-media-query';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Filter, MenuIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export type ProfileFiltersProps = {
  filters: Filters['filters'];
  filtersVisibility: Filters['filtersVisibility'];
};

export const ProfileListFilters = ({
  filters,
  filtersVisibility
}: ProfileFiltersProps) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const filterNodes = (
    <>
      <ProfileFilters filters={filters} />
      <ProductFilters filters={filters} />
      <AssetFilters filters={filters} />
      <EntityFilters filters={filters} />
    </>
  );

  if (!filtersVisibility.showFilters) {
    return null;
  }

  return (
    <>
      {isDesktop && (
        <div className="shadow-inner-tb bg-secondary/80 shadow-primary/10">
          <div className="container">
            <div className="ml-auto mr-auto flex max-w-4xl gap-6 rounded-md p-8">
              {filterNodes}
            </div>
          </div>
        </div>
      )}

      {!isDesktop && (
        <Sheet>
          <SheetTrigger
            asChild
            className="flex w-full items-center justify-end"
          >
            <div className="container w-full md:hidden">
              <Button size="icon" className="flex w-full shrink-0 gap-2">
                <Filter className="h-3.5 w-3.5" />
                <span>Show filters</span>
              </Button>
            </div>
          </SheetTrigger>

          <SheetContent>
            <ScrollArea className="h-full">
              <div className="space-y-8 pr-4">
                <h3 className="text-lg font-semibold tracking-tight">
                  Filters
                </h3>
                {filterNodes}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      )}
    </>
  );
};
