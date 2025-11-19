import { ProfileDetail } from '@/components/containers/profile-detail';
import { execute } from '@/lib/graphql/execute';
import { graphql } from '@/lib/graphql/generated';

export const dynamic = 'force-dynamic';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const ProfileDetailQuery = graphql(`
  query getProfileName($where: ProfileInfosBoolExp) {
    profileInfos(limit: 1, offset: 0, where: $where) {
      name
      descriptionShort
    }
  }
`);

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const profileData = await execute(ProfileDetailQuery, {
    where: { root: { slug: { _eq: slug } } }
  });

  const profile = profileData?.profileInfos?.[0];
  if (!profile) return null;
  
  const canonicalUrl = `https://thegrid.id/profiles/${slug}`;
  
  return {
    title: `${profile.name} Profile`,
    description: profile.descriptionShort,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: `${profile.name} Profile`,
      description: profile.descriptionShort,
      url: canonicalUrl,
      type: 'profile'
    },
    twitter: {
      card: 'summary_large_image',
      title: `${profile.name} Profile`,
      description: profile.descriptionShort
    }
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
