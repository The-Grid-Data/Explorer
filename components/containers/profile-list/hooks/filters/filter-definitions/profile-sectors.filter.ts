import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { 
  buildProfileSectorsWhereConstraints,
  buildProfileInfosConstraints
} from '../constraint-builders';

const filterId = 'profileSectors';

export const useProfileSectorsFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsArrayOf(parseAsId).withDefault([])
  );

  return useFilter<string, string>({
    id: filterId,
    type: 'multiselect',
    optionsQueryDeps: [filterStore],
    initialValue: value,
    onChange: newValue => setValue(newValue),
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getProfileSectorsOptions(
            $where: ProfileSectorsBoolExp
            $aggregateInput: ProfileInfosFilterInput
          ) {
            profileSectors(where: $where) {
              label: name
              value: id
              description: definition
              profileInfosAggregate(filter_input: $aggregateInput) {
                _count
              }
            }
          }
        `),
        {
          where: buildProfileSectorsWhereConstraints(filterStore),
          aggregateInput: { where: buildProfileInfosConstraints(filterStore) }
        }
      );

      return validateAndFormatOptions(
        data?.profileSectors
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.profileInfosAggregate?._count
          }))
          .filter(item => item.count)
          .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      );
    },
    getQueryConditions: value => ({
      profileSector: { id: { _in: value } }
    })
  });
};

