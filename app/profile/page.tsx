'use client';

import { ProfileDetail } from '@/components/containers/profile-detail';
import { useClerkContext } from '@/providers/clerk-provider';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default function Profile() {
  const { isLoading, isAuthenticated, organizationMetadata } = useClerkContext();

  if (isLoading) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold">Loading...</h1>
      </div>
    );
  }

  if (!isAuthenticated) {
    redirect('/sign-in');
  }

  if (!organizationMetadata) {
    return (
      <div className="container py-10">
        <h1 className="text-2xl font-bold">No Organization Found</h1>
        <p className="mt-4">You need to be part of an organization to view this profile.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="h-10" />
      <ProfileDetail
        profileId={organizationMetadata.slug}
        metadata={organizationMetadata}
      />
    </div>
  );
}
