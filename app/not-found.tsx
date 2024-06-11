import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { paths } from '@/lib/routes/paths';

export default function PageNotFound() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="container flex flex-col items-center gap-6 py-12">
        <div className="flex flex-col gap-4">
          <h3 className="text text-center text-xl font-semibold text-primary md:text-4xl">
            404, Page Not Found
          </h3>
          <p className="text-center text-muted-foreground">
            The page you are looking for cannot be found.
          </p>
        </div>
        <Button variant="default" asChild>
          <Link href={paths.base}>Continue exploring</Link>
        </Button>
      </div>
    </div>
  );
}
