import { ScrollArea } from '@/components/ui/scroll-area';
import { FilterGroup } from './components/filter-group';
import { ComboBox } from '@/components/ui/combobox';
import { DatePicker } from '@/components/ui/date-picker';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListFiltersList = () => {
  const { filters } = useProfileFiltersContext();

  return (
    <ScrollArea className="h-full">
      <div className="space-y-8 pr-4">
        <FilterGroup title="Profile filters">
          {filters.profileTypeFilter.enabled && (
            <ComboBox
              label="Profile Type"
              selected={filters.profileTypeFilter.value}
              onChange={options => {
                filters.profileTypeFilter.setValue(options);
              }}
              options={filters.profileTypeFilter.options?.data}
            />
          )}

          {filters.profileStatusesFilter.enabled && (
            <ComboBox
              label="Profile Status"
              selected={filters.profileStatusesFilter.value}
              onChange={options => {
                filters.profileStatusesFilter.setValue(options);
              }}
              options={filters.profileStatusesFilter.options?.data}
            />
          )}

          {filters.profileFoundingDateFilter.enabled && (
            <DatePicker
              value={filters.profileFoundingDateFilter.value}
              onChange={date => {
                filters.profileFoundingDateFilter.setValue(date);
              }}
              label="Profile Founding date"
            />
          )}
        </FilterGroup>

        <FilterGroup title="Asset filters">
          {filters.assetTypeFilter.enabled && (
            <ComboBox
              label="Asset Type"
              selected={filters.assetTypeFilter.value}
              onChange={options => {
                filters.assetTypeFilter.setValue(options);
              }}
              options={filters.assetTypeFilter.options?.data}
            />
          )}

          {filters.assetTickerFilter.enabled && (
            <ComboBox
              label="Asset Ticker"
              selected={filters.assetTickerFilter.value}
              onChange={options => {
                filters.assetTickerFilter.setValue(options);
              }}
              options={filters.assetTickerFilter.options?.data}
            />
          )}

          {filters.assetDeployedOnFilter.enabled && (
            <ComboBox
              label="Deployed on Products"
              selected={filters.assetDeployedOnFilter.value}
              onChange={options => {
                filters.assetDeployedOnFilter.setValue(options);
              }}
              options={filters.assetDeployedOnFilter.options?.data}
            />
          )}

          {filters.assetStandardFilter.enabled && (
            <ComboBox
              label="Asset Standard"
              selected={filters.assetStandardFilter.value}
              onChange={options => {
                filters.assetStandardFilter.setValue(options);
              }}
              options={filters.assetStandardFilter.options?.data}
            />
          )}
        </FilterGroup>

        <FilterGroup title="Product filters">
          {filters.productStatusFilter.enabled && (
            <ComboBox
              label="Product Status"
              selected={filters.productStatusFilter.value}
              onChange={options => {
                filters.productStatusFilter.setValue(options);
              }}
              options={filters.productStatusFilter.options?.data}
            />
          )}

          {filters.productDeployedOnFilter.enabled && (
            <ComboBox
              label="Deployed On Products"
              selected={filters.productDeployedOnFilter.value}
              onChange={options => {
                filters.productDeployedOnFilter.setValue(options);
              }}
              options={filters.productDeployedOnFilter.options?.data}
            />
          )}

          {filters.productDeployedOnFilter.enabled && (
            <ComboBox
              label="Supports Assets"
              selected={filters.productAssetRelationshipsFilter.value}
              onChange={options => {
                filters.productAssetRelationshipsFilter.setValue(options);
              }}
              options={filters.productAssetRelationshipsFilter.options?.data}
            />
          )}

          {filters.supportsProductsFilter.enabled && (
            <ComboBox
              label="Supports Products"
              selected={filters.supportsProductsFilter.value}
              onChange={options => {
                filters.supportsProductsFilter.setValue(options);
              }}
              options={filters.supportsProductsFilter.options?.data}
            />
          )}

          {filters.productLaunchDateFilter.enabled && (
            <DatePicker
              value={filters.productLaunchDateFilter.value}
              onChange={date => {
                filters.productLaunchDateFilter.setValue(date);
              }}
              label="Product Launching Date"
            />
          )}
        </FilterGroup>

        <FilterGroup title="Entity filters">
          {filters.entityTypeFilter.enabled && (
            <ComboBox
              label="Entity Type"
              selected={filters.entityTypeFilter.value}
              onChange={options => {
                filters.entityTypeFilter.setValue(options);
              }}
              options={filters.entityTypeFilter.options?.data}
            />
          )}

          {filters.entityNameFilter.enabled && (
            <ComboBox
              label="Entity Name"
              selected={filters.entityNameFilter.value}
              onChange={options => {
                filters.entityNameFilter.setValue(options);
              }}
              options={filters.entityNameFilter.options?.data}
            />
          )}

          {filters.entityCountryFilter.enabled && (
            <ComboBox
              label="Entity Country"
              selected={filters.entityCountryFilter.value}
              onChange={options => {
                filters.entityCountryFilter.setValue(options);
              }}
              options={filters.entityCountryFilter.options?.data}
            />
          )}
        </FilterGroup>
      </div>
    </ScrollArea>
  );
};
