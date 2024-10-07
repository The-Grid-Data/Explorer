import { Input } from '@/components/ui/input';
import { Filters } from '../../hooks/use-profile-filters';
import { Label } from '@/components/ui/label';

export type ProfileListSearchProps = {
  filters: Filters['filters'];
};

export const ProfileListSearch = ({ filters }: ProfileListSearchProps) => {
  return (
    <div className="relative flex h-14 flex-col justify-end">
      <Label
        className="absolute -top-4 text-xl font-bold lg:text-xl"
        htmlFor="search"
        id="search-bar"
      >
        Search profiles & products
      </Label>
      <Input
        name="search"
        type="text"
        placeholder="Search by profile name or product name"
        value={filters.searchFilter.value ?? ''}
        onChange={event => {
          filters.searchFilter.setValue(event.target.value);
        }}
      />
    </div>
  );
};
