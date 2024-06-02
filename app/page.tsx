import { Banner } from '@/components/containers/banner';
import { Hero } from '@/components/containers/hero';
import { ProfileList } from '@/components/containers/profile-list';

export default function Page() {
  return (
    <main className="container flex flex-col items-center">
      <div className="flex w-full flex-col space-y-4">
        <Hero />
        <ProfileList />
      </div>
    </main>
  );
}
