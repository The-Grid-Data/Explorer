import { Badge } from '@/components/ui/badge';

export const Hero = () => {
  return (
    <section className="container mx-auto flex max-w-4xl flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-12 lg:pb-12">
      <Badge className="my-2" variant="secondary">
        This data is available to machines and humans.
      </Badge>

      <h1 className="scroll-m-20 text-balance text-center text-4xl font-extrabold leading-tight tracking-tight lg:text-5xl lg:leading-[1.1]">
       A Node of Truth on Assets, Products, and Services in Solana.
      </h1>
      <p className="max-w-xl text-center text-lg font-light text-foreground">
        Explore the largest offchain dataset for Solana projects, use the filters to find projects relevant to you. 
      </p>
    </section>
  );
};
