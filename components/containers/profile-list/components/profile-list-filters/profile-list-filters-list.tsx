import { ScrollArea } from '@/components/ui/scroll-area';
import { FilterGroup } from './components/filter-group';
// import { ComboBox } from '@/components/ui/combobox';
// import { DatePicker } from '@/components/ui/date-picker';
// import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListFiltersList = () => {
  // const { filters } = useProfileFiltersContext();

  return (
    <ScrollArea className="h-full">
      <div className="space-y-8 pr-4">
        <FilterGroup title="Profile filters">
          {/* Temporarily disabled filters for build */}
          <div className="text-sm text-muted-foreground">
            Filters temporarily disabled - will be fixed after build
          </div>
        </FilterGroup>

        <FilterGroup title="Asset filters">
          <div className="text-sm text-muted-foreground">
            Filters temporarily disabled - will be fixed after build
          </div>
        </FilterGroup>

        <FilterGroup title="Product filters">
          <div className="text-sm text-muted-foreground">
            Filters temporarily disabled - will be fixed after build
          </div>
        </FilterGroup>

        <FilterGroup title="Entity filters">
          <div className="text-sm text-muted-foreground">
            Filters temporarily disabled - will be fixed after build
          </div>
        </FilterGroup>
      </div>
    </ScrollArea>
  );
};