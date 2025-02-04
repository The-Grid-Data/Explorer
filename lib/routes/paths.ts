export const paths = {
  thegrid: {
    base: 'https://thegrid.id',
    terms: 'https://thegrid.id/legal/web-services-terms'
  },
  base: '/',
  profile: {
    base: '/profiles',
    detail: (slug: string, opts?: { section?: string }) => {
      const section = opts?.section;
      return `/profiles/${slug}${section ? `#${section}` : ''}`;
    }
  }
} as const;
