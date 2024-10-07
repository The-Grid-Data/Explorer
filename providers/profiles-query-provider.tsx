import { createContext, useContext } from 'react';
import { useProfileSortingContext } from '@/providers/sorting-provider';
import { useProfileFiltersContext } from '@/providers/filters-provider';
import { SearchProfilesQueryVariables } from '@/lib/graphql/generated-graphql';

const ProfilesQueryContext = createContext<SearchProfilesQueryVariables | null>(
  null
);

export const ProfileQueryProvider = ({ children }: React.PropsWithChildren) => {
  const filters = useProfileFiltersContext();
  const sorting = useProfileSortingContext();

  const query: SearchProfilesQueryVariables = {
    where: filters.toQueryWhereFields(),
    order_by: sorting.toQuerySortByFields(),
    limit: 10,
    offset: 0
  };

  return (
    <ProfilesQueryContext.Provider value={query}>
      {children}
    </ProfilesQueryContext.Provider>
  );
};

export const useProfilesQueryContext = () => {
  const context = useContext(ProfilesQueryContext);
  if (!context) {
    throw new Error(
      'useProfileQuery must be used within a ProfileQueryProvider'
    );
  }
  return context;
};
