# Welcome to The Grid's referance data explorer. 
This has been created as a way for data platforms to explore and get inspired by our data. 

This uses our graphQL endpoint which can be found over at [docs.thegrid.id](docs.thegrid.id)

Right now this takes a very profile focused 'lens' view at our data. In the future, this may expand to other lenses. To understand how we look at lenses, see this: 


### Instalation

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
