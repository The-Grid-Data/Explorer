import { CodegenConfig } from '@graphql-codegen/cli';
import { config } from 'dotenv';

config();

const codegenConfig: CodegenConfig = {
  schema: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL,
  // overwrite: true,
  ignoreNoDocuments: true,
  // config: {
  //   skipDocumentsValidation: {
  //     ignoreRules: ['MaxIntrospectionDepthRule']
  //   }
  // },
  documents: [
    'lib/**/*.graphql.ts',
    '{app,components}/**/*.tsx',
    '!lib/graphql/generated/**/*'
  ],
  generates: {
    'lib/graphql/generated/': {
      preset: 'client',
      config: {
        documentMode: 'string',
        dedupeFragments: true,
        extractAllFieldsToTypes: true,
        strictScalars: true,
        scalars: {
          Date1: {
            input: 'string',
            output: 'string'
          },
          Float2: {
            input: 'number',
            output: 'number'
          },
          Int2: {
            input: 'number',
            output: 'number'
          },
          String2: {
            input: 'string',
            output: 'string'
          }
        }
      }
    },
    'lib/graphql/generated/schema.graphql': {
      plugins: ['schema-ast'],
      config: {
        includeDirectives: true
      }
    }
  }
  // hooks: {
  //   afterOneFileWrite: ['prettier --write', 'echo']
  // }
};

export default codegenConfig;
