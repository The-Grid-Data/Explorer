export const paths = {
  base: '/',
  profile: {
    base: '/profiles',
    detail: (slug: string) => `/profiles/${slug}`
  }
} as const;
