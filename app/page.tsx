import { Hero } from '@/components/containers/hero';
import { ProfileList } from '@/components/containers/profile-list';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <main className="min-h-[1600px] w-full">
      <Hero />
      <Suspense>
        <ProfileList />
      </Suspense>
    </main>
  );
}
