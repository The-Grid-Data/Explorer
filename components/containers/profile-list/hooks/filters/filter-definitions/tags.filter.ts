import { execute } from '@/lib/graphql/execute';
import { useFilter } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { siteConfig } from '@/lib/site-config';
import { 
  buildTagsWhereConstraints,
  buildProfileTagsConstraints
} from '../constraint-builders';

const filterId = 'tags';

export const useTagsFilter = (filterStore: FiltersStore) => {
  const [value, setValue] = useQueryState(
    filterId,
    parseAsArrayOf(parseAsId).withDefault([])
  );

  return useFilter<string, string>({
    id: filterId,
    type: 'multiselect',
    initialValue: value,
    optionsQueryDeps: [filterStore],
    onChange: newValue => setValue(newValue),
    getOptions: async () => {
      const data = await execute(
        graphql(`
          query getTagsOptions(
            $where: TagsBoolExp
            $aggregateInput: ProfileTagsFilterInput
          ) {
            tags(where: $where) {
              value: id
              label: name
              description
              profileTagsAggregate(filter_input: $aggregateInput) {
                _count
              }
            }
          }
        `),
        {
          where: buildTagsWhereConstraints(filterStore),
          aggregateInput: { where: buildProfileTagsConstraints(filterStore) }
        }
      );

      const tagsToExclude = siteConfig.excludeTags as string[];

      return validateAndFormatOptions(
        data?.tags
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.profileTagsAggregate?._count
          }))
          .filter(item => item.count)
          .filter(item => !tagsToExclude?.includes?.(item.value))
          .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      );
    },
    getQueryConditions: value => ({
      root: {
        profileTags: { tagId: { _in: value } }
      }
    }),
    getOptionsQueryConditions: value => ({
      products: {
        root: {
          profileInfos: {
            root: { profileTags: { tagId: { _in: value } } }
          }
        }
      }
    })
  });
};

