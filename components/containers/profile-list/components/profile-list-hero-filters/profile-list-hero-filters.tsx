import CheckboxGrid from '@/components/ui/checkbox-grid';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';
import { useState, useMemo, useCallback } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

// Build a map of group ID -> product type IDs for quick lookup
const buildGroupToProductTypeIdsMap = (
  productTypeGroups: typeof siteConfig.productTypeGroups,
  productTypesData: Array<{ value: string; label: string; slug?: string }> | undefined
): Map<string, string[]> => {
  const slugToIdMap = new Map(
    productTypesData?.map(pt => [(pt as any).slug || pt.label.toLowerCase().replace(/\s+/g, '_'), pt.value]) ?? []
  );
  
  const groupMap = new Map<string, string[]>();
  for (const group of productTypeGroups || []) {
    const productTypeIds = group.productTypeSlugs
      .map(slug => slugToIdMap.get(slug))
      .filter((id): id is string => id !== undefined);
    groupMap.set(group.id, productTypeIds);
  }
  return groupMap;
};

export const ProfileListHeroFilters = () => {
  const { filters } = useProfileFiltersContext();
  const [sectorSearch, setSectorSearch] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');
  const [groupSearch, setGroupSearch] = useState('');

  // Get the mapping from group IDs to product type IDs
  const groupToProductTypeIds = useMemo(() => {
    // We need to get the slug from the product types data
    // The productTypeGroupsFilter fetches product types with slugs
    const productTypesWithSlug = (filters.productTypeGroupsFilter as any)._productTypesData;
    return buildGroupToProductTypeIdsMap(
      siteConfig.productTypeGroups,
      productTypesWithSlug || filters.productTypesFilter.options?.data
    );
  }, [filters.productTypeGroupsFilter, filters.productTypesFilter.options?.data]);

  // Calculate which groups are "active" based on selected product types
  const activeGroupIds = useMemo(() => {
    const selectedProductTypes = new Set(filters.productTypesFilter.value);
    const activeGroups: string[] = [];
    
    for (const group of siteConfig.productTypeGroups || []) {
      const groupProductTypeIds = groupToProductTypeIds.get(group.id) || [];
      // A group is active if ALL its product types are selected
      if (groupProductTypeIds.length > 0 &&
          groupProductTypeIds.every(id => selectedProductTypes.has(id))) {
        activeGroups.push(group.id);
      }
    }
    return activeGroups;
  }, [filters.productTypesFilter.value, groupToProductTypeIds]);

  // Handle group toggle - add/remove all product types in the group
  const handleGroupToggle = useCallback((selectedGroupIds: string[]) => {
    const currentProductTypes = new Set(filters.productTypesFilter.value);
    const previousGroupIds = new Set(activeGroupIds);
    
    // Find which groups were added and which were removed
    const addedGroups = selectedGroupIds.filter(id => !previousGroupIds.has(id));
    const removedGroups = Array.from(previousGroupIds).filter(id => !selectedGroupIds.includes(id));
    
    // Add product types for newly selected groups
    for (const groupId of addedGroups) {
      const productTypeIds = groupToProductTypeIds.get(groupId) || [];
      for (const id of productTypeIds) {
        currentProductTypes.add(id);
      }
    }
    
    // Remove product types for deselected groups
    for (const groupId of removedGroups) {
      const productTypeIds = groupToProductTypeIds.get(groupId) || [];
      for (const id of productTypeIds) {
        currentProductTypes.delete(id);
      }
    }
    
    filters.productTypesFilter.setValue(Array.from(currentProductTypes));
  }, [filters.productTypesFilter, activeGroupIds, groupToProductTypeIds]);

  const filteredGroups = useMemo(() => {
    const groups =
      filters.productTypeGroupsFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(groupSearch.toLowerCase())
      ) ?? [];

    // Sort groups: active ones first, then by original order (which is preserved from config)
    return [...groups].sort((a, b) => {
      const aActive = activeGroupIds.includes(a.value);
      const bActive = activeGroupIds.includes(b.value);
      if (aActive && !bActive) return -1;
      if (!aActive && bActive) return 1;
      return 0;
    });
  }, [
    filters.productTypeGroupsFilter.options?.data,
    groupSearch,
    activeGroupIds
  ]);

  const filteredSectors = useMemo(() => {
    const sectors =
      filters.profileSectorsFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(sectorSearch.toLowerCase())
      ) ?? [];

    // Sort sectors: active ones first
    return [...sectors].sort((a, b) => {
      const aActive = filters.profileSectorsFilter.value.includes(a.value);
      const bActive = filters.profileSectorsFilter.value.includes(b.value);
      if (aActive && !bActive) return -1;
      if (!aActive && bActive) return 1;
      return 0;
    });
  }, [
    filters.profileSectorsFilter.options?.data,
    sectorSearch,
    filters.profileSectorsFilter.value
  ]);

  const filteredProducts = useMemo(() => {
    const products =
      filters.productTypesFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(productSearch.toLowerCase())
      ) ?? [];

    // Sort products: active ones first, then by count (descending)
    return [...products].sort((a, b) => {
      const aActive = filters.productTypesFilter.value.includes(a.value);
      const bActive = filters.productTypesFilter.value.includes(b.value);
      if (aActive && !bActive) return -1;
      if (!aActive && bActive) return 1;
      // If both active or both inactive, keep original sort (by count)
      return 0;
    });
  }, [
    filters.productTypesFilter.options?.data,
    productSearch,
    filters.productTypesFilter.value
  ]);

  const filteredTags = useMemo(() => {
    const tags =
      filters.tagsFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(tagSearch.toLowerCase())
      ) ?? [];

    // Sort tags: active ones first
    return [...tags].sort((a, b) => {
      const aActive = filters.tagsFilter.value.includes(a.value);
      const bActive = filters.tagsFilter.value.includes(b.value);
      if (aActive && !bActive) return -1;
      if (!aActive && bActive) return 1;
      return 0;
    });
  }, [
    filters.tagsFilter.options?.data,
    tagSearch,
    filters.tagsFilter.value
  ]);

  return (
    <>
      {Boolean(siteConfig.featureFlags?.displayTagsFilter) && (
        <div className="space-y-4">
          <div className="flex flex-col gap-2 md:flex-row">
            <FilterTitle
              title="Tags"
              count={filteredTags.length}
              isFetching={filters.tagsFilter.options?.isFetching}
            />
            {siteConfig.featureFlags.allowHeroFiltersSearch && (
              <SearchInput
                value={tagSearch}
                onChange={setTagSearch}
                placeholder="Search tags..."
              />
            )}
          </div>
          <CheckboxGrid
            initialVisibleCount={12}
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
      <div className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row">
          <FilterTitle
            title="Product Categories"
            count={filteredGroups.length}
            isFetching={filters.productTypeGroupsFilter.options?.isFetching}
          />
          {siteConfig.featureFlags?.allowHeroFiltersSearch && (
            <SearchInput
              value={groupSearch}
              onChange={setGroupSearch}
              placeholder="Search categories..."
            />
          )}
        </div>
        <CheckboxGrid
          initialVisibleCount={12}
          isFetching={filters.productTypeGroupsFilter.options?.isFetching}
          isLoading={filters.productTypeGroupsFilter.options?.isLoading}
          selected={activeGroupIds}
          options={filteredGroups}
          onChange={handleGroupToggle}
        />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row">
          <FilterTitle
            title="Product types"
            count={filteredProducts.length}
            isFetching={filters.productTypesFilter.options?.isFetching}
          />
          {siteConfig.featureFlags?.allowHeroFiltersSearch && (
            <SearchInput
              value={productSearch}
              onChange={setProductSearch}
              placeholder="Search product types..."
            />
          )}
        </div>
        <CheckboxGrid
          initialVisibleCount={12}
          isFetching={filters.productTypesFilter.options?.isFetching}
          isLoading={filters.productTypesFilter.options?.isLoading}
          selected={filters.productTypesFilter.value}
          options={filteredProducts}
          onChange={selected => {
            filters.productTypesFilter.setValue(selected);
          }}
        />
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2 md:flex-row">
          <FilterTitle
            title="Profile Sectors"
            count={filteredSectors.length}
            isFetching={filters.profileSectorsFilter.options?.isFetching}
          />
          {siteConfig.featureFlags?.allowHeroFiltersSearch && (
            <SearchInput
              value={sectorSearch}
              onChange={setSectorSearch}
              placeholder="Search sectors..."
            />
          )}
        </div>
        <CheckboxGrid
          initialVisibleCount={12}
          isFetching={filters.profileSectorsFilter.options?.isFetching}
          isLoading={filters.profileSectorsFilter.options?.isLoading}
          selected={filters.profileSectorsFilter.value}
          options={filteredSectors}
          onChange={selected => {
            filters.profileSectorsFilter.setValue(selected);
          }}
        />
      </div>
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
  <div className="flex items-center rounded-md">
    <MagnifyingGlassIcon className="mr-1 h-4 w-4 shrink-0 text-muted-foreground/50" />
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
      className="flex h-7 w-fit border-none bg-transparent px-0 shadow-none outline-none placeholder:text-muted-foreground/50 focus-visible:border-b focus-visible:border-black focus-visible:ring-0 md:max-w-fit"
    />
  </div>
);
