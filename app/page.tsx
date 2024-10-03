import { Hero } from '@/components/containers/hero';
import { ProfileList } from '@/components/containers/profile-list';
import { Suspense } from 'react';

export default function Page() {
  return (
    <main className="min-h-[1600px] w-full">
      <Hero />
      <Suspense fallback={<div>Loading...</div>}>
        <ProfileList />
      </Suspense>
    </main>
  );
}
