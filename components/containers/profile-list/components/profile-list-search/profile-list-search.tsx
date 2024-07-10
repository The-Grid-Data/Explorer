import { Input } from '@/components/ui/input';
import { Filters } from '../../hooks/use-profile-filters';
import { Label } from '@/components/ui/label';
import { Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';

export type ProfileListSearchProps = {
  filters: Filters['filters'];
  filtersVisibility: Filters['filtersVisibility'];
};

export const ProfileListSearch = ({
  filters,
  filtersVisibility
}: ProfileListSearchProps) => {
  return (
    <div className="space-y-2">
      <div className="flex items-end gap-4">
        <div className="flex w-full flex-col gap-2">
          <Label className="text-xs" htmlFor="search">
            Search profiles
          </Label>
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
        <Button
          onClick={() => {
            filtersVisibility.setShowFilters(!filtersVisibility.showFilters);
          }}
          variant="outline"
          size="sm"
          className="hidden h-10 shrink-0 gap-1 md:flex"
        >
          <Filter className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only">
            {filtersVisibility.showFilters && 'Hide filters'}
            {!filtersVisibility.showFilters && 'Show filters'}
          </span>
        </Button>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={filters.searchFilter.config?.fields.descriptionLong}
          onCheckedChange={(value: boolean) => {
            filters.searchFilter.setConfig(config => ({
              ...config,
              fields: {
                ...config.fields,
                descriptionLong: value
              }
            }));
          }}
        />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Include description results
        </label>
      </div>
    </div>
  );
};
