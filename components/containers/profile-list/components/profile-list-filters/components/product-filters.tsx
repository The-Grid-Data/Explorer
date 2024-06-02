import { ComboBox } from '@/components/ui/combobox';
import { FilterGroup } from './filter-group';
import { DatePicker } from '@/components/ui/date-picker';
import { Filters } from '../../../hooks/use-profile-filters';

export const ProductFilters = ({
  filters
}: {
  filters: Filters['filters'];
}) => {
  return (
    <FilterGroup title="Product filters">
      <ComboBox
        label="Type"
        selected={filters.productTypesFilter.value}
        onChange={options => {
          filters.productTypesFilter.setValue(options);
        }}
        options={filters.productTypesFilter.options}
      />

      <ComboBox
        label="Status"
        selected={filters.productStatusFilter.value}
        onChange={options => {
          filters.productStatusFilter.setValue(options);
        }}
        options={filters.productStatusFilter.options}
      />

      <ComboBox
        label="Deployed on"
        selected={filters.productDeployedOnFilter.value}
        onChange={options => {
          filters.productDeployedOnFilter.setValue(options);
        }}
        options={filters.productDeployedOnFilter.options}
      />

      <ComboBox
        label="Supports"
        selected={filters.productSupportsFilter.value}
        onChange={options => {
          filters.productSupportsFilter.setValue(options);
        }}
        options={filters.productSupportsFilter.options}
      />

      <DatePicker
        value={filters.productLaunchDateFilter.value}
        onChange={date => {
          filters.productLaunchDateFilter.setValue(date);
        }}
        label="Launching date"
      />
    </FilterGroup>
  );
};
