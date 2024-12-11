import { CodegenConfig } from '@graphql-codegen/cli';
import { config } from 'dotenv';

config();

const codegenConfig: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL,
  overwrite: true,
  ignoreNoDocuments: true,
  config: {
    skipDocumentsValidation: {
      ignoreRules: ['MaxIntrospectionDepthRule']
    }
  },
  documents: './lib/graphql/queries/**/*.graphql',
  generates: {
    'lib/graphql/generated-graphql.ts': {
      config: {
        reactQueryVersion: 5,
        addInfiniteQuery: true,
        fetcher: {
          endpoint: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL,
          fetchParams: {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        }
      },
      plugins: ['typescript', 'typescript-operations', 'typescript-react-query']
    }
  },
  hooks: {
    afterOneFileWrite: ['prettier --write', 'echo']
  }
};

export default codegenConfig;
