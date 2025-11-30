import { createContext, useContext, useState, useCallback } from 'react';
import {
  Filters,
  useProfileFilters
} from '@/components/containers/profile-list/hooks/use-profile-filters';

type FiltersContextValue = Filters & {
  pendingFilters: Filters;
  isScanning: boolean;
  triggerScan: () => void;
  updatePendingFilter: <K extends keyof Filters['filters']>(
    filterKey: K,
    value: Filters['filters'][K]['value']
  ) => void;
};

const ProfileFiltersContext = createContext<FiltersContextValue | null>(null);

export const ProfileFiltersProvider = ({
  children
}: React.PropsWithChildren) => {
  const activeFilters = useProfileFilters();
  const pendingFilters = useProfileFilters();
  const [isScanning, setIsScanning] = useState(false);

  const updatePendingFilter = useCallback(
    <K extends keyof Filters['filters']>(
      filterKey: K,
      value: Filters['filters'][K]['value']
    ) => {
      (pendingFilters.filters[filterKey].setValue as any)(value);
    },
    [pendingFilters]
  );

  const triggerScan = useCallback(() => {
    setIsScanning(true);
    
    // Copy all pending filter values to active filters
    Object.keys(pendingFilters.filters).forEach((key) => {
      const filterKey = key as keyof Filters['filters'];
      const pendingValue = pendingFilters.filters[filterKey].value;
      (activeFilters.filters[filterKey].setValue as any)(pendingValue);
    });

    // Reset scanning state after animation
    setTimeout(() => {
      setIsScanning(false);
    }, 1500);
  }, [activeFilters, pendingFilters]);

  return (
    <ProfileFiltersContext.Provider
      value={{
        ...activeFilters,
        pendingFilters,
        isScanning,
        triggerScan,
        updatePendingFilter
      }}
    >
      {children}
    </ProfileFiltersContext.Provider>
  );
};

export const useProfileFiltersContext = () => {
  const context = useContext(ProfileFiltersContext);
  if (!context) {
    throw new Error(
      'useProfileFiltersContext must be used within a ProfileFiltersProvider'
    );
  }
  return context;
};
