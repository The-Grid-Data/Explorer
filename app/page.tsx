import { Banner } from '@/components/containers/banner';
import { Hero } from '@/components/containers/hero';
import { ProfileList } from '@/components/containers/profile-list';

export default function Page() {
  return (
    <main className="w-full">
      <Hero />
      <ProfileList />
    </main>
  );
}
