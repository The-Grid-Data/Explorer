import { ProfileDetail } from '@/components/containers/profile-detail';

export const dynamic = 'force-dynamic';

export type PageProps<P = {}> = {
  params: P;
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Profile({ params }: PageProps<{ id: string }>) {
  return (
    <div>
      <div className="h-10" />
      <ProfileDetail profileId={params.id} />
    </div>
  );
}
