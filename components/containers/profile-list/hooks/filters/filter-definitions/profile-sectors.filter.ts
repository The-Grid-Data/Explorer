import { execute } from '@/lib/graphql/execute';
import { useFilter, MultiSelectFilterProps } from '../../use-filter';
import { validateAndFormatOptions, parseAsId } from '../utils';
import { FiltersStore } from '../../use-profile-filters';
import { useQueryState, parseAsArrayOf } from 'nuqs';
import { graphql } from '@/lib/graphql/generated';
import { isNotEmpty } from '@/lib/utils/is-not-empty';
import deepmerge from 'deepmerge';

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
          ? {
              profileInfos: {
                root: {
                  profileTags: { tagId: { _in: filterStore.tagsFilter } }
                }
              }
            }
          : {},
        isNotEmpty(filterStore.productTypesFilter)
          ? {
              products: {
                root: {
                  productTypeId: { _in: filterStore.productTypesFilter }
                }
              }
            }
          : {}
      ]);
      const data = await execute(
        graphql(`
          query getProfileSectorsOptions($where: CProfileSectorsBoolExp) {
            profileSectors(where: $where) {
              label: name
              value: id
              description: definition
            }
          }
        `),
        { where }
      );
      return validateAndFormatOptions(data?.profileSectors);
    },
    getQueryConditions: value => ({
      profileSector: { id: { _in: value } }
    })
  });
};
