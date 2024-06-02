
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
