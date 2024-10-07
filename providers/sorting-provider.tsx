import { createContext, useContext } from 'react';
import {
  Sorting,
  useProfileSorting
} from '@/components/containers/profile-list/hooks/use-profile-sorting';

const ProfileSortingContext = createContext<Sorting | null>(null);

export const ProfileSortingProvider = ({
  children
}: React.PropsWithChildren) => {
  const sorting = useProfileSorting();
  return (
    <ProfileSortingContext.Provider value={sorting}>
      {children}
    </ProfileSortingContext.Provider>
  );
};

export const useProfileSortingContext = () => {
  const context = useContext(ProfileSortingContext);
  if (!context) {
    throw new Error(
      'useProfileSortingContext must be used within a ProfileSortingProvider'
    );
  }
  return context;
};
