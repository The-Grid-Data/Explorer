import CheckboxGrid from '@/components/ui/checkbox-grid';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListHeroFilters = () => {
  const { filters } = useProfileFiltersContext();
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-bold lg:text-xl ">
          Profile Sectors{' '}
          {filters.productTypesFilter?.options &&
            `(${filters.profileSectorsFilter.options?.data?.length ?? 0})`}
        </h1>
        <CheckboxGrid
          isLoading={filters.profileSectorsFilter.options?.isFetching}
          selected={filters.profileSectorsFilter.value}
          options={filters.profileSectorsFilter.options?.data ?? []}
          onChange={selected => {
            filters.profileSectorsFilter.setValue(selected);
          }}
        />
      </div>
      <div className="space-y-4">
        <h1 className="text-xl font-bold lg:text-xl ">
          Product types{' '}
          {filters.productTypesFilter?.options &&
            `(${filters.productTypesFilter.options?.data?.length ?? 0})`}
        </h1>

        <CheckboxGrid
          isLoading={filters.productTypesFilter.options?.isFetching}
          selected={filters.productTypesFilter.value}
          options={filters.productTypesFilter.options?.data ?? []}
          onChange={selected => {
            filters.productTypesFilter.setValue(selected);
          }}
        />
      </div>
      {!Boolean(siteConfig.tags.length) && (
        <div className="space-y-4">
          <h1 className="text-xl font-bold lg:text-xl ">
            Tags{' '}
            {filters.tagsFilter?.options &&
              `(${filters.tagsFilter.options?.data?.length ?? 0})`}
          </h1>
          <CheckboxGrid
            isLoading={filters.tagsFilter.options?.isFetching}
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
