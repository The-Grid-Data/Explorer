import { createContext, useContext, useState, useCallback, useEffect, useRef } from 'react';
import {
  Filters,
  useProfileFilters
} from '@/components/containers/profile-list/hooks/use-profile-filters';

type FiltersContextValue = Filters & {
  pendingFilters: Filters;
  isScanning: boolean;
  triggerScan: (showLoader?: boolean) => void;
  setQueryFetching: (isFetching: boolean) => void;
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
  const [isQueryFetching, setIsQueryFetching] = useState(false);
  const scanRequestedRef = useRef(false);

  // When scan is requested and query finishes, hide loader
  useEffect(() => {
    if (scanRequestedRef.current && !isQueryFetching) {
      setIsScanning(false);
      scanRequestedRef.current = false;
    }
  }, [isQueryFetching]);

  const updatePendingFilter = useCallback(
    <K extends keyof Filters['filters']>(
      filterKey: K,
      value: Filters['filters'][K]['value']
    ) => {
      (pendingFilters.filters[filterKey].setValue as any)(value);
    },
    [pendingFilters]
  );

  const triggerScan = useCallback((showLoader: boolean = true) => {
    if (showLoader) {
      setIsScanning(true);
      scanRequestedRef.current = true;
    }
    
    // Copy all pending filter values to active filters
    Object.keys(pendingFilters.filters).forEach((key) => {
      const filterKey = key as keyof Filters['filters'];
      const pendingValue = pendingFilters.filters[filterKey].value;
      (activeFilters.filters[filterKey].setValue as any)(pendingValue);
    });
  }, [activeFilters, pendingFilters]);

  const setQueryFetching = useCallback((isFetching: boolean) => {
    setIsQueryFetching(isFetching);
  }, []);

  return (
    <ProfileFiltersContext.Provider
      value={{
        ...activeFilters,
        pendingFilters,
        isScanning,
        triggerScan,
        setQueryFetching,
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
