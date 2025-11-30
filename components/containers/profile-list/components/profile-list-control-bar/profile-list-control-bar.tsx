'use client';

import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { ProfileListSearch } from '../profile-list-search';
import { useProfileFiltersContext } from '@/providers/filters-provider';
import { MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';
import { useRef } from 'react';

export const ProfileListControlBar = () => {
  const { pendingFilters, triggerScan, isScanning } = useProfileFiltersContext();
  const scanButtonRef = useRef<HTMLButtonElement>(null);

  const allFiltersLoaded =
    !pendingFilters.filters.productTypesFilter.options?.isLoading &&
    !pendingFilters.filters.profileSectorsFilter.options?.isLoading &&
    !pendingFilters.filters.tagsFilter.options?.isLoading;

  const handleScanClick = () => {
    triggerScan();
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleClearAll = () => {
    Object.values(pendingFilters.filters).forEach((filter) => {
      if ('setValue' in filter) {
        if (Array.isArray(filter.value)) {
          (filter.setValue as any)([]);
        } else if (filter.value !== null && typeof filter.value === 'object' && 'from' in filter.value) {
          (filter.setValue as any)({ from: null, to: null });
        } else {
          (filter.setValue as any)(null);
        }
      }
    });
  };

  const hasActiveFilters =
    pendingFilters.filters.productTypesFilter.value.length > 0 ||
    pendingFilters.filters.profileSectorsFilter.value.length > 0 ||
    pendingFilters.filters.tagsFilter.value.length > 0 ||
    pendingFilters.filters.searchFilter.value !== null;

  return (
    <div className="sticky top-0 z-20 -mx-4 bg-background/98 px-6 py-3 backdrop-blur-md supports-[backdrop-filter]:bg-background/95 border-b shadow-sm animate-in fade-in slide-in-from-top-4 duration-500">
      <div className="flex items-center gap-3">
        {/* Search - takes most space */}
        <div className="flex-1 max-w-2xl">
          <ProfileListSearch />
        </div>

        {/* Divider */}
        <div className="h-8 w-px bg-border" />

        {/* Clear Filters button - minimal */}
        <Button
          onClick={handleClearAll}
          disabled={!hasActiveFilters || isScanning}
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground transition-all whitespace-nowrap"
        >
          <Cross2Icon className="mr-1.5 h-3.5 w-3.5" />
          Clear Filters
        </Button>

        {/* Scan with Filters button - prominent */}
        <Button
          ref={scanButtonRef}
          onClick={handleScanClick}
          disabled={isScanning || !allFiltersLoaded}
          size="sm"
          className="min-w-[140px] bg-primary font-semibold transition-all hover:scale-105 hover:shadow-md disabled:opacity-50 whitespace-nowrap"
        >
          {isScanning ? (
            <>
              <Spinner size="sm" className="mr-1.5" />
              Scanning...
            </>
          ) : !allFiltersLoaded ? (
            <>
              <Spinner size="sm" className="mr-1.5" />
              Loading...
            </>
          ) : (
            <>
              <MagnifyingGlassIcon className="mr-1.5 h-4 w-4" />
              Scan with Filters
            </>
          )}
        </Button>
      </div>
    </div>
  );
};