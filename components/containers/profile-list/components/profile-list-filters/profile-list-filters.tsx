import { Filters } from '../../hooks/use-profile-filters';
import { ProfileFilters } from './components/profile-filters';
import { ProductFilters } from './components/product-filters';
import { AssetFilters } from './components/asset-filters';
import { EntityFilters } from './components/entity-filters';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Filter, MenuIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

export type ProfileFiltersProps = {
  filters: Filters['filters'];
};

export const ProfileListFilters = ({ filters }: ProfileFiltersProps) => {
  const filterNodes = (
    <>
      <ProfileFilters filters={filters} />
      <ProductFilters filters={filters} />
      <AssetFilters filters={filters} />
      <EntityFilters filters={filters} />
    </>
  );

  return (
    <Sheet>
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
            {filterNodes}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
