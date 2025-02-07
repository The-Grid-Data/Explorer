# Welcome to The Grid's reference data explorer

This has been created as a way for data platforms to explore and get inspired by [The Grid's](https://thegrid.id/) ecosystem metadata. It is easily deployable on Vercel.

This uses our graphQL endpoint which is: https://beta.node.thegrid.id/graphql
Information can be found here: [docs.thegrid.id](https://docs.thegrid.id/)

Right now this takes a very profile focused 'lens' view at our data. In the future, this may expand to other lenses. To understand how we look at lenses, [see this](https://docs.thegrid.id/lenses-at-the-grid-18)

## Usage

To be able to customise this to your usecase, the following is a very simple check list of things you need to change:

- [ ] Update hard filters on site-config.ts which limits which list of profiles loads, also update header and description names for tab information
- [ ] Upload your logos and favicon (before deployment to avoid caching issues)
- [ ] Maybe remove the clone repo button
- [ ] Update the banner text in the banner file
- [ ] Update the header info
      _(though note that if you are using our open API and a free plan, you need to [keep attribution back to The Grid](https://thegrid.id/legal/web-services-terms) so keep this in mind when updating the banner text and header info)_

### Installation

Install [pnpm](https://pnpm.io/installation)

```
npm install -g pnpm
```

create a `.env` file and make sure to add the following variables `NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL=https://myurl.com/graphql`. Change as needed.

### Develop

To develop all apps and packages, run the following command:

Recommended to run `pnpm dev:watch` to automatically run codegen(Pull latest graphql schema and unify fragments)

Option 1:

```
pnpm dev:watch
```

Option 2:

```
pnpm dev
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

#### Commands

The following commands are available:

- `pnpm dev` - Start the development server
- `pnpm dev:watch` - (Recommended) Start development server and watch for GraphQL schema changes
- `pnpm download-config` - Download configuration file from the vercel storage if provided in the environment variables
- `pnpm build` - Build the application for production
- `pnpm start` - Start the production server
- `pnpm lint` - Run ESLint
- `pnpm graphql:compile` - Generate GraphQL types and SDK
- `pnpm graphql:watch` - Watch and regenerate GraphQL types and SDK
- `pnpm shadcn` - Add new shadcn/ui components
- `pnpm typecheck` - Run TypeScript type checking

## Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FThe-Grid-Data%2FExplorer&env=LOAD_CONFIG_FROM_VERCEL_STORAGE,ADMIN_USER,ADMIN_PASSWORD,TRIGGER_REDEPLOY_HOOK_URL,BLOB_READ_WRITE_TOKEN,NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL)

# Licensing notes

The Explorer code itself is under the MIT license (see LICENSE)
The Grid's Data Service (which powers the Explorer via the endpoint above), is separately licensed, and is available under our [Web Services Terms](https://thegrid.id/legal/web-services-terms) unless you have a separate signed order with The Grid.
