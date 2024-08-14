import { Badge } from '@/components/ui/badge';

export const Hero = () => {
  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-12 container">
      <Badge className="my-2" variant="secondary">
        Explore Solana, through the lens of Superteam
      </Badge>

      <h1 className="scroll-m-20 text-balance text-center text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl lg:leading-[1.1]">
        Explore The Solana Ecosystem
      </h1>
      <p className="max-w-xl text-center text-lg font-light text-foreground">
        Try checking out the product type filters to find Solana projects that are relevant to you!
      </p>
    </section>
  );
};
