'use client';

import { QueryDialogButton } from '@/components/containers/query-dialog-button';
import {
  ProfileListCards,
  SearchProfilesQuery
} from './components/profile-list-cards';
import { ProfileListHeroFilters } from './components/profile-list-hero-filters';
import { ProfileListControlBar } from './components/profile-list-control-bar';
import {
  ProfileListFilters,
  ProfileListFiltersLabel
} from './components/profile-list-filters';
import { ProfileListSorting } from './components/profile-list-sorting';
import { ProfileFiltersProvider, useProfileFiltersContext } from '@/providers/filters-provider';
import { ProfileSortingProvider } from '@/providers/sorting-provider';
import { siteConfig } from '@/lib/site-config';
import {
  ProfileQueryProvider,
  useProfilesQueryContext
} from '@/providers/profiles-query-provider';
import { ProfileListFiltersList } from './components/profile-list-filters/profile-list-filters-list';
import { ForceFieldBarrier } from '@/components/ui/force-field-barrier';
import { useState, useEffect, useRef } from 'react';

const ProfileListContent = () => {
  const { triggerScan, isScanning, pendingFilters } = useProfileFiltersContext();
  const [showForceField, setShowForceField] = useState(false);
  const [pushProgress, setPushProgress] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const filtersEndRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const scrollStartY = useRef(0);
  const scrollAttemptsRef = useRef(0);

  // Reset hasTriggered when any filter changes
  useEffect(() => {
    setHasTriggered(false);
  }, [
    pendingFilters.filters.productTypesFilter.value,
    pendingFilters.filters.profileSectorsFilter.value,
    pendingFilters.filters.tagsFilter.value,
    pendingFilters.filters.searchFilter.value
  ]);

  useEffect(() => {
    const handleScroll = () => {
      if (hasTriggered || isScanning) return;

      const filtersEnd = filtersEndRef.current;
      if (!filtersEnd) return;

      const rect = filtersEnd.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollThreshold = viewportHeight * 0.6;

      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollY.current;
      lastScrollY.current = currentScrollY;

      if (rect.top <= scrollThreshold && isScrollingDown) {
        if (!showForceField) {
          setShowForceField(true);
          scrollStartY.current = currentScrollY;
        }
        
        // Calculate push progress based on how far past threshold
        const distancePastThreshold = scrollThreshold - rect.top;
        const maxPushDistance = 250; // pixels to push through
        const progress = Math.min((distancePastThreshold / maxPushDistance) * 100, 100);
        setPushProgress(progress);
      } else if (rect.top > scrollThreshold) {
        setShowForceField(false);
        setPushProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasTriggered, isScanning, showForceField]);

  const handleBreakthrough = () => {
    setHasTriggered(true);
    setShowForceField(false);
    setPushProgress(0);
    triggerScan();
    
    // Scroll to results
    setTimeout(() => {
      const resultsSection = document.getElementById('results-section');
      if (resultsSection) {
        resultsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <div className="w-full space-y-4">
      <ForceFieldBarrier
        isActive={showForceField}
        pushProgress={pushProgress}
        onBreakthrough={handleBreakthrough}
      />
      
      <div className="container space-y-4 md:space-y-10">
        {/* Control Bar: Search, Scan with Filters, Clear Filters */}
        <ProfileListControlBar />

        {/* Filter Sections */}
        <ProfileListHeroFilters />

        <div ref={filtersEndRef} className="w-full">
          <div className="flex flex-col items-start gap-4 pt-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex w-full flex-col gap-4 lg:flex-row lg:items-center">
              <ProfileListFilters />
            </div>

            <div className="flex w-full flex-col items-end gap-4 md:w-fit md:flex-row md:justify-start">
              <ProfileListSorting />
              {siteConfig.featureFlags?.displayQueriesButtons && (
                <ViewQueryButton />
              )}
            </div>
          </div>
          
          <div className="mt-4">
            <ProfileListFiltersLabel />
          </div>
          
          <ProfileListCards />
        </div>
      </div>
    </div>
  );
};

export const ProfileList = () => {
  return (
    <ProfileFiltersProvider>
      <ProfileSortingProvider>
        <ProfileQueryProvider>
          <ProfileListContent />
        </ProfileQueryProvider>
      </ProfileSortingProvider>
    </ProfileFiltersProvider>
  );
};

export const useFiltersLoadingState = () => {
  const { pendingFilters } = useProfileFiltersContext();
  const filters = pendingFilters.filters;
  
  // Check if any critical filters are still loading
  const isLoading =
    filters.productTypesFilter.options?.isLoading ||
    filters.profileSectorsFilter.options?.isLoading ||
    filters.tagsFilter.options?.isLoading;
  
  return isLoading ?? true;
};

const ViewQueryButton = () => {
  const query = useProfilesQueryContext();
  return (
    <QueryDialogButton
      queryDocument={SearchProfilesQuery as unknown as string}
      variables={query}
      buttonLabel="View query"
    />
  );
};
