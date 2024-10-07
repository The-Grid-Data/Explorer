import { createContext, useContext } from 'react';
import {
  Filters,
  useProfileFilters
} from '@/components/containers/profile-list/hooks/use-profile-filters';

const ProfileFiltersContext = createContext<Filters | null>(null);

export const ProfileFiltersProvider = ({
  children
}: React.PropsWithChildren) => {
  const filters = useProfileFilters();
  return (
    <ProfileFiltersContext.Provider value={filters}>
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
