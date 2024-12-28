import { graphql } from '@/lib/graphql/generated';

export const ProfileDetailQuery = graphql(`
  query getProfile($where: CProfileInfosBoolExp) {
    profileInfos(limit: 1, offset: 0, where: $where) {
      tagLine
      rootId
      profileTypeId
      profileStatusId
      profileSectorId
      name
      logo
      id
      foundingDate
      descriptionShort
      descriptionLong
      profileSector {
        name
        id
        definition
      }
      profileStatus {
        name
        id
        definition
      }
      profileType {
        name
        id
        definition
      }
      urls(order_by: { urlTypeId: Asc }) {
        url
        urlType {
          name
          id
          definition
        }
      }
      root {
        urlMain
        slug
        socials {
          name
          socialType {
            name
          }
          urls(order_by: { urlTypeId: Asc }) {
            url
          }
        }
        ...AssetFieldsFragment
        ...ProductFieldsFragment
        ...EntityFieldsFragment
        profileTags {
          tag {
            name
            id
          }
        }
      }
      mainProduct: root {
        products(where: { isMainProduct: { _eq: "1" } }, limit: 1) {
          name
          productType {
            name
          }
        }
      }
    }
  }
`);
