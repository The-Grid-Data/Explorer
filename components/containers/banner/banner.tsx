import { siteConfig } from '@/lib/site-config';

export const Banner = () => {
  return (
    <section className="flex justify-center bg-foreground p-2 dark:bg-foreground/10">
      <span
        className="text-center text-sm font-light text-muted/70 dark:text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: siteConfig.banner.text }}
      />
    </section>
  );
};
