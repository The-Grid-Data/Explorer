import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListSearch = () => {
  const { filters } = useProfileFiltersContext();

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
