import { ProfileDetail } from '@/components/containers/profile-detail';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return {
    title: `${slug} | ${siteConfig.metadata.title}`
  };
}

export default async function Profile({ params }: PageProps) {
  const { slug } = await params;
  return (
    <div>
      <div className="h-10" />
      <ProfileDetail profileId={slug} />
    </div>
  );
}
