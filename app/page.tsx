'use client';

import { Hero } from '@/components/containers/hero';
import { ProfileList, useFiltersLoadingState } from '@/components/containers/profile-list';
import { GridSplashScreen } from '@/components/ui/grid-splash-screen';
import { ProfileFiltersProvider } from '@/providers/filters-provider';
import { Suspense, useState, useEffect } from 'react';

export const dynamic = 'force-dynamic';

const PageContent = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [mounted, setMounted] = useState(false);
  const isFiltersLoading = useFiltersLoadingState();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || showSplash) {
    return (
      <GridSplashScreen
        onComplete={() => setShowSplash(false)}
        isLoading={isFiltersLoading}
        loadingMessage="Preparing your filters..."
      />
    );
  }

  return (
    <main className="min-h-[1600px] w-full animate-in fade-in duration-500">
      <Hero />
      <Suspense>
        <ProfileList />
      </Suspense>
    </main>
  );
};

export default function Page() {
  return (
    <ProfileFiltersProvider>
      <PageContent />
    </ProfileFiltersProvider>
  );
}
