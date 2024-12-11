export const siteConfig = {
  pageTitle: 'The Grid | Data Explorer',
  verifiedTagId: 7,
  logoSrc: {
    dark: '/thegrid-logo-white.svg',
    light: '/thegrid-logo.svg'
  },
  pageDescription:
    'Powering Discoverability of Assets, Products, and Services in Web3.',
  filterByProductIds: [], // Used to filter which blockchains to show in the full list.
  blockchainIds: [], // Filter default options. Filters the options of (productSupports, productDeployedOnFilter and assetDeployedOnFilter)
  blockchainProductTypeIds: [15, 16, 17], // Filter default options. used by productDeployedOnFilter.
  tags: [], // Filter default options. used by tagsFilter.
  displayQueries: true
};
