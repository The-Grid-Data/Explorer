import CheckboxGrid from '@/components/ui/checkbox-grid';
import { Spinner } from '@/components/ui/spinner';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListHeroFilters = () => {
  const { filters } = useProfileFiltersContext();
  return (
    <>
      <div className="space-y-4">
        <FilterTitle
          title="Profile Sectors"
          count={filters.profileSectorsFilter.options?.data?.length}
          isFetching={filters.profileSectorsFilter.options?.isFetching}
        />
        <CheckboxGrid
          isFetching={filters.profileSectorsFilter.options?.isFetching}
          isLoading={filters.profileSectorsFilter.options?.isLoading}
          selected={filters.profileSectorsFilter.value}
          options={filters.profileSectorsFilter.options?.data ?? []}
          onChange={selected => {
            filters.profileSectorsFilter.setValue(selected);
          }}
        />
      </div>
      <div className="space-y-4">
        <FilterTitle
          title="Product types"
          count={filters.productTypesFilter.options?.data?.length}
          isFetching={filters.productTypesFilter.options?.isFetching}
        />
        <CheckboxGrid
          isFetching={filters.productTypesFilter.options?.isFetching}
          isLoading={filters.productTypesFilter.options?.isLoading}
          selected={filters.productTypesFilter.value}
          options={filters.productTypesFilter.options?.data ?? []}
          onChange={selected => {
            filters.productTypesFilter.setValue(selected);
          }}
        />
      </div>
      {!Boolean(siteConfig.tags.length) && (
        <div className="space-y-4">
          <FilterTitle
            title="Tags"
            count={filters.tagsFilter.options?.data?.length}
            isFetching={filters.tagsFilter.options?.isFetching}
          />
          <CheckboxGrid
            isFetching={filters.tagsFilter.options?.isFetching}
            isLoading={filters.tagsFilter.options?.isLoading}
            selected={filters.tagsFilter.value}
            options={filters.tagsFilter.options?.data ?? []}
            onChange={selected => {
              filters.tagsFilter.setValue(selected);
            }}
          />
        </div>
      )}
    </>
  );
};

const FilterTitle = ({
  title,
  count,
  isFetching
}: {
  title: string;
  count?: number;
  isFetching?: boolean;
}) => (
  <h1 className="flex items-center gap-2 text-xl font-bold lg:text-xl">
    {title}{' '}
    {isFetching ? <Spinner size="sm" /> : count !== undefined && `(${count})`}
  </h1>
);
