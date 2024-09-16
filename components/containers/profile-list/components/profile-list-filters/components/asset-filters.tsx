import { ComboBox } from '@/components/ui/combobox';
import { FilterGroup } from './filter-group';
import { Filters } from '../../../hooks/use-profile-filters';

export const AssetFilters = ({ filters }: { filters: Filters['filters'] }) => {
  return (
    <FilterGroup title="Asset filters">
      <ComboBox
        label="Asset Type"
        selected={filters.assetTypeFilter.value}
        onChange={options => {
          filters.assetTypeFilter.setValue(options);
        }}
        options={filters.assetTypeFilter.options}
      />

      <ComboBox
        label="Asset Ticker"
        selected={filters.assetTickerFilter.value}
        onChange={options => {
          filters.assetTickerFilter.setValue(options);
        }}
        options={filters.assetTickerFilter.options}
      />

      <ComboBox
        label="Deployed on Products"
        selected={filters.assetDeployedOnFilter.value}
        onChange={options => {
          filters.assetDeployedOnFilter.setValue(options);
        }}
        options={filters.assetDeployedOnFilter.options}
      />

      <ComboBox
        label="Asset Standard"
        selected={filters.assetStandardFilter.value}
        onChange={options => {
          filters.assetStandardFilter.setValue(options);
        }}
        options={filters.assetStandardFilter.options}
      />
    </FilterGroup>
  );
};
