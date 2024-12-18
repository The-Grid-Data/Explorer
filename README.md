# Welcome to The Grid's reference data explorer 
This has been created as a way for data platforms to explore and get inspired by [The Grid's](https://thegrid.id/) ecosystem metadata. It is easily deployable on Vercel. 

This uses our graphQL endpoint which can be found over at [docs.thegrid.id](https://docs.thegrid.id/)

Right now this takes a very profile focused 'lens' view at our data. In the future, this may expand to other lenses. To understand how we look at lenses, [see this](https://docs.thegrid.id/lenses-at-the-grid-18)

## Usage
To be able to customise this to your usecase, the following is a very simple check list of things you need to change:
- [ ] Update hard filters on site-config.ts which limits which list of profiles loads, also update header and description names for tab information 
- [ ] Upload your logos and favicon (before deployment to avoid caching issues)
- [ ] Maybe remove the clone repo button
- [ ] Update the banner text in the banner file 
- [ ] Update the header info
*(though note that if you are using our open API and a free plan, you need to [keep attribution back to The Grid](https://thegrid.id/legal/web-services-terms) so keep this in mind when updating the banner text and header info)*

### Installation

Install [pnpm](https://pnpm.io/installation)

```
npm install -g pnpm
```

create a `.env` file and make sure to add the following variables  `NEXT_PUBLIC_GRAPHQL_ENDPOINT_URL=https://myurl.com/graphql`. Change as needed. 

### Develop

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Deployment

The app is dockerized, all the docker files will be available inside the `infra` directory.

```
pnpm dev
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```


## Deploy on Vercel
Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Licensing notes
The Explorer code itself is under the MIT license (see LICENSE)
The Grid's Data Service (which powers the Explorer via the endpoint above), is separately licensed, and is available under our [Web Services Terms](https://thegrid.id/legal/web-services-terms) unless you have a separate signed order with The Grid.
