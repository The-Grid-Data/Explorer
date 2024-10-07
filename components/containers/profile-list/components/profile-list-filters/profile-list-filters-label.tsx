import pluralize from 'pluralize';
import { Button } from '@/components/ui/button';
import { useProfileFiltersContext } from '@/providers/filters-provider';

export const ProfileListFiltersLabel = () => {
  const { filters } = useProfileFiltersContext();
  const activeFiltersSum = Object.values(filters)
    .map(item => item.active)
    .reduce((sum, active) => sum + (active ? 1 : 0), 0);

  if (activeFiltersSum > 0) {
    return (
      <div className="flex w-full items-center gap-2">
        <span className="text text-sm text-muted-foreground">
          There {pluralize('is', activeFiltersSum)}{' '}
          <span className="font-semibold text-primary">{activeFiltersSum}</span>{' '}
          active {pluralize('filters', activeFiltersSum)}
        </span>{' '}
        <Button
          onClick={() => {
            Object.values(filters).forEach(filter => filter.reset());
          }}
          variant="outline"
          className="h-7"
          size="sm"
        >
          Clear filters
        </Button>
      </div>
    );
  }

  return <div />;
};
