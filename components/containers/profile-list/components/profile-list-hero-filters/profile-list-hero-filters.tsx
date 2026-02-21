import CheckboxGrid from '@/components/ui/checkbox-grid';
import { Spinner } from '@/components/ui/spinner';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { siteConfig } from '@/lib/site-config';
import { useProfileFiltersContext } from '@/providers/filters-provider';
import { type ReactNode, useState, useMemo } from 'react';
import { ChevronDownIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { Layers, Package, Banknote, Tag } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ProfileListHeroFilters = () => {
  const { filters } = useProfileFiltersContext();
  const [isOpen, setIsOpen] = useState(false);
  const [sectorSearch, setSectorSearch] = useState('');
  const [productSearch, setProductSearch] = useState('');
  const [tagSearch, setTagSearch] = useState('');
  const [assetSearch, setAssetSearch] = useState('');

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

  const filteredAssetTypes = useMemo(() => {
    return (
      filters.assetTypeFilter.options?.data?.filter(option =>
        option.label.toLowerCase().includes(assetSearch.toLowerCase())
      ) ?? []
    );
  }, [filters.assetTypeFilter.options?.data, assetSearch]);

  return (
    <div className="space-y-4">
      <Button
        variant="ghost"
        className="flex items-center gap-2 px-0 text-lg font-semibold hover:bg-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        Advanced Filters
        <ChevronDownIcon
          className={cn(
            'h-5 w-5 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </Button>
      {isOpen && (
        <div className="grid gap-4 md:grid-cols-2">
          {Boolean(siteConfig.featureFlags?.displayTagsFilter) && (
            <FilterCard
              icon={<Tag className="h-4 w-4" />}
              title="Tags"
              isFetching={filters.tagsFilter.options?.isFetching}
              searchValue={tagSearch}
              onSearchChange={setTagSearch}
              searchPlaceholder="Search tags..."
            >
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
            </FilterCard>
          )}
          <FilterCard
            icon={<Layers className="h-4 w-4" />}
            title="Profile Sectors"
            isFetching={filters.profileSectorsFilter.options?.isFetching}
            searchValue={sectorSearch}
            onSearchChange={setSectorSearch}
            searchPlaceholder="Search sectors..."
          >
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
          </FilterCard>
          <FilterCard
            icon={<Package className="h-4 w-4" />}
            title="Product Types"
            isFetching={filters.productTypesFilter.options?.isFetching}
            searchValue={productSearch}
            onSearchChange={setProductSearch}
            searchPlaceholder="Search product types..."
          >
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
          </FilterCard>
          {Boolean(siteConfig.featureFlags?.displayAssetTypeFilter) && (
            <FilterCard
              icon={<Banknote className="h-4 w-4" />}
              title="Asset Types"
              isFetching={filters.assetTypeFilter.options?.isFetching}
              searchValue={assetSearch}
              onSearchChange={setAssetSearch}
              searchPlaceholder="Search asset types..."
            >
              <CheckboxGrid
                initialVisibleCount={12}
                isFetching={filters.assetTypeFilter.options?.isFetching}
                isLoading={filters.assetTypeFilter.options?.isLoading}
                selected={filters.assetTypeFilter.value}
                options={filteredAssetTypes}
                onChange={selected => {
                  filters.assetTypeFilter.setValue(selected);
                }}
              />
            </FilterCard>
          )}
        </div>
      )}
    </div>
  );
};

const FilterCard = ({
  icon,
  title,
  isFetching,
  searchValue,
  onSearchChange,
  searchPlaceholder,
  children
}: {
  icon: ReactNode;
  title: string;
  isFetching?: boolean;
  searchValue: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder: string;
  children: ReactNode;
}) => (
  <Card className="shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between space-y-0 px-4 py-3">
      <div className="flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <h3 className="text-sm font-medium">
          {title}
          {isFetching && <Spinner size="sm" className="ml-2 inline" />}
        </h3>
      </div>
      {siteConfig.featureFlags?.allowHeroFiltersSearch && (
        <SearchInput
          value={searchValue}
          onChange={onSearchChange}
          placeholder={searchPlaceholder}
        />
      )}
    </CardHeader>
    <CardContent className="px-4 pb-4 pt-0">
      {children}
    </CardContent>
  </Card>
);

const SearchInput = ({
  value,
  onChange,
  placeholder
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
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
