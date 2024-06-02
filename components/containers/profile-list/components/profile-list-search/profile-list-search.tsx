import { Input } from '@/components/ui/input';
import { Filters } from '../../hooks/use-profile-filters';
import { Label } from '@/components/ui/label';

export type ProfileListSearchProps = {
  filters: Filters['filters'];
};

export const ProfileListSearch = ({ filters }: ProfileListSearchProps) => (
  <div className="flex w-full flex-col gap-2">
    <Label htmlFor="search">Search profiles</Label>
    <Input
      name="search"
      className="h-10"
      type="text"
      placeholder="Search by name or description"
      value={filters.searchFilter.value}
      onChange={event => {
        filters.searchFilter.setValue(event.target.value);
      }}
    />
  </div>
);
