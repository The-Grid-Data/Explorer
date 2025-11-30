import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListSearch = () => {
  const { filters } = useProfileFiltersContext();

  return (
    <div className="relative flex w-full flex-col gap-2">
      <Label
        className="text-sm font-medium"
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
        className="h-10"
      />
    </div>
  );
};
