import CheckboxGrid from '@/components/ui/checkbox-grid';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';
import { useState, useMemo } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

export const ProfileListHeroFilters = () => {
  const { filters } = useProfileFiltersContext();
  const [sectorSearch, setSectorSearch] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');

  const filteredSectors = useMemo(() => {
    return (
      filters.profileSectorsFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(sectorSearch.toLowerCase())
      ) ?? []
    );
  }, [filters.profileSectorsFilter.options?.data, sectorSearch]);

  const filteredProducts = useMemo(() => {
    return (
      filters.productTypesFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(productSearch.toLowerCase())
      ) ?? []
    );
  }, [filters.productTypesFilter.options?.data, productSearch]);

  const filteredTags = useMemo(() => {
    return (
      filters.tagsFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(tagSearch.toLowerCase())
      ) ?? []
    );
  }, [filters.tagsFilter.options?.data, tagSearch]);

  return (
    <>
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <FilterTitle
            title="Profile Sectors"
            count={filteredSectors.length}
            isFetching={filters.profileSectorsFilter.options?.isFetching}
          />
          {siteConfig.allowHeroFiltersSearch && (
            <SearchInput
              value={sectorSearch}
              onChange={setSectorSearch}
              placeholder="Search sectors..."
            />
          )}
        </div>
        <CheckboxGrid
          isFetching={filters.profileSectorsFilter.options?.isFetching}
          isLoading={filters.profileSectorsFilter.options?.isLoading}
          selected={filters.profileSectorsFilter.value}
          options={filteredSectors}
          onChange={selected => {
            filters.profileSectorsFilter.setValue(selected);
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-4 md:flex-row">
          <FilterTitle
            title="Product types"
            count={filteredProducts.length}
            isFetching={filters.productTypesFilter.options?.isFetching}
          />
          {siteConfig.allowHeroFiltersSearch && (
            <SearchInput
              value={productSearch}
              onChange={setProductSearch}
              placeholder="Search product types..."
            />
          )}
        </div>
        <CheckboxGrid
          isFetching={filters.productTypesFilter.options?.isFetching}
          isLoading={filters.productTypesFilter.options?.isLoading}
          selected={filters.productTypesFilter.value}
          options={filteredProducts}
          onChange={selected => {
            filters.productTypesFilter.setValue(selected);
          }}
        />
      </div>
      {!Boolean(siteConfig.overrideFilterValues.tags.length) && (
        <div className="space-y-4">
          <div className="flex flex-col gap-4 md:flex-row">
            <FilterTitle
              title="Tags"
              count={filteredTags.length}
              isFetching={filters.tagsFilter.options?.isFetching}
            />
            {siteConfig.allowHeroFiltersSearch && (
              <SearchInput
                value={tagSearch}
                onChange={setTagSearch}
                placeholder="Search tags..."
              />
            )}
          </div>
          <CheckboxGrid
            isFetching={filters.tagsFilter.options?.isFetching}
            isLoading={filters.tagsFilter.options?.isLoading}
            selected={filters.tagsFilter.value}
            options={filteredTags}
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

const SearchInput = ({
  value,
  onChange,
  placeholder
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  className?: string;
  variant?: 'default';
}) => (
  <div className="flex items-center border-b">
    <MagnifyingGlassIcon className="h-4 w-4 shrink-0 opacity-50" />
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="flex h-7 w-fit border-none  bg-transparent outline-none placeholder:text-muted-foreground/50 focus-visible:border-b focus-visible:border-black focus-visible:ring-0 md:max-w-fit"
    />
  </div>
);
