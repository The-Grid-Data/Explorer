# Welcome to The Grid's reference data explorer

This has been created as a way for data platforms to explore and get inspired by [The Grid's](https://thegrid.id/) ecosystem metadata. It is easily deployable on Vercel.

This uses our graphQL endpoint which is: https://beta.node.thegrid.id/graphql
Information can be found here: [docs.thegrid.id](https://docs.thegrid.id/)

Right now this takes a very profile focused 'lens' view at our data. In the future, this may expand to other lenses. To understand how we look at lenses, [see this](https://docs.thegrid.id/lenses-at-the-grid-18).

# To use this repo
### Full fork
To have full control, fork this repo. This will provide the most flexiablity. (if you want to add pricing charts ect, you should be making a fork!)

### 'Simple' deploy - But changes on this repo will effect your deployment, but this repo is provided 'as is'.
You can spin this up on any domain you want, and limit which data is shown. You get access to simple JSON package on /admin to customise the deployment. Everything is done via Vercel hooks and blobs.

To be able to customise this to your usecase, you must first deploy a new project on your vercel account. Follow the excat steps to complete the full setup. 
1. Sign up for a vercel account
2. Click new project
3. Import the explorer
4. Enter end the following first enviroment variables. If blank, leave blank as you will need to gererate these in the next steps


| Environment Variable | Value |
|-------------------|-------|
| NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL | https://beta.node.thegrid.id/graphql |
| ADMIN_PASSWORD | Password |
| ADMIN_USER | admin |
| LOAD_CONFIG_FROM_VERCEL_STORAGE | true  (set to false if you just want the full explorer) |
| TRIGGER_REDEPLOY_HOOK_URL | steps 5 -> 9 |

5. Press deploy and put on the kettle...
6. Once your tea is made, go to your project settings
7. Git -> Deploy hooks
8. Redeploy -> Main -> Create Hook -> My hook -> Main (this means that the hook works from the main branch? (I think??)
9. Copy hook -> Enviroment vars -> Add too "TRIGGER_REDEPLOY_HOOK_URL"

Then Generate Blob: 

10. Go to storage (tab on top nav bar)
11. Create database
12. Create New Blob
13. Ok normal store name and click create 
14. Contuine (this will add the env var!) 
15. Rejoice! You made it!
16. REDEPLOY All your saved changes

Now you can go to /admin and click restore to get started. 

Whenever you make a change, you will need to redeploy to see changes. For large enviroments we would recommend that you deploy a staging on a random domain before commiting to live. 

You can then limit which data is shown through various filters. The most common is tags or ProductDeployOn / supports products. Use the graphQl endpoint to find values or contact us for support here.

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

The Explorer code itself is under the MIT license (see LICENSE.md)
The Grid's Data Service (which powers the Explorer via the endpoint above), is separately licensed, and is available under our [Web Services Terms](https://thegrid.id/legal/web-services-terms) unless you have a separate signed order with The Grid.
