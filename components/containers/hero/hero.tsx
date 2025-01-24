import { Badge } from '@/components/ui/badge';
import { siteConfig } from '@/lib/site-config';

export const Hero = () => {
  return (
    <section className="container mx-auto flex max-w-4xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-12">
      {siteConfig.pages.home.hero.badge && (
        <Badge className="my-2 text-center" variant="secondary">
          {siteConfig.pages.home.hero.badge}
        </Badge>
      )}

      {siteConfig.pages.home.hero.title && (
        <h1 className="scroll-m-20 text-balance text-center text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl lg:leading-[1.1]">
          {siteConfig.pages.home.hero.title}
        </h1>
      )}

      {siteConfig.pages.home.hero.description && (
        <p className="max-w-xl text-center text-lg font-light text-foreground">
          {siteConfig.pages.home.hero.description}
        </p>
      )}
    </section>
  );
};
