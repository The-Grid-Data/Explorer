import { graphql } from '@/lib/graphql/generated';

export const MediaFragment = graphql(`
  fragment MediaFragment on ProfileInfos {
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