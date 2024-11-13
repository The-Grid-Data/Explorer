export const paths = {
  base: '/',
  profile: {
    base: '/profiles',
    detail: (slug: string, opts?: { section?: string }) => {
      const section = opts?.section;
      return `/profiles/${slug}${section ? `#${section}` : ''}`;
    }
  }
} as const;
