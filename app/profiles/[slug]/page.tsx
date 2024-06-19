import { ProfileDetail } from '@/components/containers/profile-detail';
import { siteConfig } from '@/lib/site-config';

export const dynamic = 'force-dynamic';

export type PageProps<P = {}> = {
  params: P;
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params
}: PageProps<{ slug: string }>) {
  return {
    title: `${params.slug} | ${siteConfig.pageTitle}`
  };
}
export default async function Profile({ params }: PageProps<{ slug: string }>) {
  return (
    <div>
      <div className="h-10" />
      <ProfileDetail profileId={params.slug} />
    </div>
  );
}
