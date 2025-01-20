import { ProfileDetail } from '@/components/containers/profile-detail';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ profileId: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { profileId } = await params;
  return {
    title: `${profileId} | ${siteConfig.pageTitle}`
  };
}

export default async function Profile({ params }: PageProps) {
  const { profileId } = await params;
  return (
    <div>
      <div className="h-10" />
      <ProfileDetail profileId={profileId} />
    </div>
  );
}
