import { ComboBox } from '@/components/ui/combobox';
import { FilterGroup } from './filter-group';
import { DatePicker } from '@/components/ui/date-picker';
import { Filters } from '../../../hooks/use-profile-filters';

export const ProfileFilters = ({
  filters
}: {
  filters: Filters['filters'];
}) => {
  return (
    <FilterGroup title="Profile filters">
      <ComboBox
        label="Profile Type"
        selected={filters.profileTypeFilter.value}
        onChange={options => {
          filters.profileTypeFilter.setValue(options);
        }}
        options={filters.profileTypeFilter.options}
      />

      <ComboBox
        label="Profile Status"
        selected={filters.profileStatusesFilter.value}
        onChange={options => {
          filters.profileStatusesFilter.setValue(options);
        }}
        options={filters.profileStatusesFilter.options}
      />

      <DatePicker
        value={filters.profileFoundingDateFilter.value}
        onChange={date => {
          filters.profileFoundingDateFilter.setValue(date);
        }}
        label="Profile Founding date"
      />
    </FilterGroup>
  );
};
