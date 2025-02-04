import Link from 'next/link';
import { paths } from '@/lib/routes/paths';
import Image from 'next/image';
import { useTheme } from 'next-themes';

export const PoweredBy = () => {
  const { resolvedTheme } = useTheme();

  const darkLogoSrc = '/thegrid-logo-rounded-white.png';
  const lightLogoSrc = '/thegrid-logo-rounded.png';

  const logoSrc = resolvedTheme === 'dark' ? darkLogoSrc : lightLogoSrc;

  return (
    <p className="text flex items-center gap-1">
      Powered by{' '}
      <Link
        className="flex items-center gap-1 text-primary underline hover:no-underline"
        target="_blank"
        rel="noopener noreferrer"
        href={paths.thegrid.base}
      >
        {' '}
        <Image src={logoSrc} alt="The Grid" width={16} height={16} />
        The Grid
      </Link>
    </p>
  );
};
