import { Filters } from '../../hooks/use-profile-filters';
import { ProfileFilters } from './components/profile-filters';
import { ProductFilters } from './components/product-filters';
import { AssetFilters } from './components/asset-filters';
import { EntityFilters } from './components/entity-filters';
import { useState } from 'react';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';

export type ProfileFiltersProps = {
  filters: Filters['filters'];
};

export const ProfileListFilters = ({ filters }: ProfileFiltersProps) => {
  const [showFilters, setShowFilters] = useState(true);

  return (
    <div className="space-y-2">
      <Button
        onClick={() => {
          setShowFilters(!showFilters);
        }}
        variant="outline"
        size="sm"
        className="flex gap-1"
      >
        <Filter className="h-3.5 w-3.5" />
        <span className="sr-only sm:not-sr-only">
          {showFilters && 'Hide filters'}
          {!showFilters && 'Show filters'}
        </span>
      </Button>

      {showFilters && (
        <>
          <div className="flex gap-6 rounded-md bg-secondary/60 p-6 shadow-md">
            <ProfileFilters filters={filters} />
            <ProductFilters filters={filters} />
            <AssetFilters filters={filters} />
            <EntityFilters filters={filters} />
          </div>
          <div className="h-4" />
        </>
      )}
    </div>
  );
};
