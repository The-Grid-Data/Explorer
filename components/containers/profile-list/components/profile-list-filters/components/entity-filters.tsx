import { ComboBox } from '@/components/ui/combobox';
import { FilterGroup } from './filter-group';
import { Filters } from '../../../hooks/use-profile-filters';

export const EntityFilters = ({ filters }: { filters: Filters['filters'] }) => {
  return (
    <FilterGroup title="Entity filters">
      <ComboBox
        label="Type"
        selected={filters.entityTypeFilter.value}
        onChange={options => {
          filters.entityTypeFilter.setValue(options);
        }}
        options={filters.entityTypeFilter.options}
      />

      <ComboBox
        label="Name"
        selected={filters.entityNameFilter.value}
        onChange={options => {
          filters.entityNameFilter.setValue(options);
        }}
        options={filters.entityNameFilter.options}
      />

      <ComboBox
        label="Country"
        selected={filters.entityCountryFilter.value}
        onChange={options => {
          filters.entityCountryFilter.setValue(options);
        }}
        options={filters.entityCountryFilter.options}
      />
    </FilterGroup>
  );
};
