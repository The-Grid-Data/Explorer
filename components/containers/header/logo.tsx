// Start of Selection
'use client';

import { useEffect, useState } from 'react';
import { siteConfig } from '@/lib/site-config';
import Image from 'next/image';
import { useTheme } from 'next-themes';
import { Skeleton } from '@/components/ui/skeleton';

export const Logo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = resolvedTheme || 'dark';

  if (!mounted) {
    // Prevents mismatch by not rendering until client-side
    return <Skeleton className="mt-2 h-[50px] w-[160px]" />;
  }

  return (
    <Image
      alt="The grid logo"
      src={siteConfig.logoSrc[currentTheme as keyof typeof siteConfig.logoSrc]}
      width={160}
      height={50}
    />
  );
};
