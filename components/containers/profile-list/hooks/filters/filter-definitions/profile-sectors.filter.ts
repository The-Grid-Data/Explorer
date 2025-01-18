import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import deepmerge from 'deepmerge';
import {
  CProfileInfosFilterInput,
  CProfileSectorsBoolExp
} from '@/lib/graphql/generated/graphql';

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
      const where = deepmerge.all([
        isNotEmpty(filterStore.tagsFilter)
          ? ({
              profileInfos: {
                root: {
                  profileTags: { tagId: { _in: filterStore.tagsFilter } }
                }
              }
            } satisfies CProfileSectorsBoolExp)
          : {},
        isNotEmpty(filterStore.productTypesFilter)
          ? ({
              profileInfos: {
                root: {
                  products: {
                    productTypeId: { _in: filterStore.productTypesFilter }
                  }
                }
              }
            } satisfies CProfileSectorsBoolExp)
          : {}
      ]);

      const profileInfosFilterInput = deepmerge.all([
        isNotEmpty(filterStore.tagsFilter)
          ? ({
              root: {
                profileTags: { tagId: { _in: filterStore.tagsFilter } }
              }
            } satisfies CProfileInfosFilterInput['where'])
          : {},
        isNotEmpty(filterStore.productTypesFilter)
          ? ({
              root: {
                products: {
                  productTypeId: { _in: filterStore.productTypesFilter }
                }
              }
            } satisfies CProfileInfosFilterInput['where'])
          : {}
      ]);

      const data = await execute(
        graphql(`
          query getProfileSectorsOptions(
            $where: CProfileSectorsBoolExp
            $profileInfosFilterInput: CProfileInfosFilterInput
          ) {
            profileSectors(where: $where) {
              label: name
              value: id
              description: definition
              profileInfosAggregate(filter_input: $profileInfosFilterInput) {
                _count
              }
            }
          }
        `),
        { where, profileInfosFilterInput: { where: profileInfosFilterInput } }
      );

      return validateAndFormatOptions(
        data?.profileSectors
          ?.map(item => ({
            label: item.label,
            value: item.value,
            description: item.description,
            count: item?.profileInfosAggregate?._count
          }))
          .sort((a, b) => (b.count ?? 0) - (a.count ?? 0))
      );
    },
    getQueryConditions: value => ({
      profileSector: { id: { _in: value } }
    })
  });
};
