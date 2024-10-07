import CheckboxGrid from '@/components/ui/checkbox-grid';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListHeroFilters = () => {
  const { filters, isLoading } = useProfileFiltersContext();
  return (
    <>
      <div className="space-y-4">
        <h1 className="text-xl font-bold lg:text-xl ">
          Product types{' '}
          {filters.productTypesFilter?.options &&
            `(${filters.productTypesFilter.options.length})`}
        </h1>
        <CheckboxGrid
          isLoading={isLoading}
          selected={filters.productTypesFilter.value}
          options={filters.productTypesFilter.options ?? []}
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
              `(${filters.tagsFilter.options.length})`}
          </h1>
          <CheckboxGrid
            isLoading={isLoading}
            selected={filters.tagsFilter.value}
            options={filters.tagsFilter.options ?? []}
            onChange={selected => {
              filters.tagsFilter.setValue(selected);
            }}
          />
        </div>
      )}
    </>
  );
};
