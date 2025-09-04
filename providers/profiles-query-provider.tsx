import { createContext, useContext } from 'react';
import { useProfileSortingContext } from '@/providers/sorting-provider';
import { withDefaultWhereFilter } from '@/lib/utils/default-where-filter';
import { useProfileFiltersContext } from './filters-provider';
import { SearchProfilesByRankingQueryVariables } from '@/lib/graphql/generated/graphql';

const ProfilesQueryContext = createContext<SearchProfilesByRankingQueryVariables | null>(
  null
);

export const ProfileQueryProvider = ({ children }: React.PropsWithChildren) => {
  // const filters = useProfileFiltersContext();
  const sorting = useProfileSortingContext();

  // Temporarily disabled filters for build - core connectionScore sorting still works
  const query: SearchProfilesByRankingQueryVariables = {
    where: undefined, // No filters applied temporarily
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
