import { graphql } from '@/lib/graphql/generated';

export const AssetMediaFragment = graphql(`
  fragment AssetMediaFragment on Assets {
    media {
      id
      url
      mediaType {
        id
        name
      }
    }
  }
`);