import { Hero } from '@/components/containers/hero';
import { ProfileList } from '@/components/containers/profile-list';

export default function Page() {
  return (
    <main className="min-h-[1600px] w-full">
      <Hero />
      <ProfileList />
    </main>
  );
}
