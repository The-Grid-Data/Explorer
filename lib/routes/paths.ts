export const paths = {
  base: '/',
  profile: {
    base: '/profiles',
    detail: (id: string) => `/profiles/${id}`
  }
} as const;
