'use client';

import { Card, CardContent } from '@/components/ui/card';
import { graphql } from '@/lib/graphql/generated';
import { execute } from '@/lib/graphql/execute';
import { useQuery } from '@tanstack/react-query';
import { GalleryThumbnailsIcon } from 'lucide-react';
import Link from 'next/link';
import { findMedia } from '@/lib/utils/media-utils';

const ParentProfileQuery = graphql(`
  query getParentProfile($where: RootsBoolExp) {
    roots(limit: 1, offset: 0, where: $where) {
      slug
      lastPublicValidation
      profileInfos {
        foundingDate
        media {
          mediaType {
            id
            name
            slug
          }
          url
        }
        name
        logo
        icon
        descriptionShort
        profileType {
          name
        }
      }
    }
  }
`);

type ParentProfileCardProps = {
  rootId: string;
  title: 'PARENT' | 'CHILD';
  relationshipType?: string;
};

const ParentProfileCard = ({
  rootId,
  title,
  relationshipType
}: ParentProfileCardProps) => {
  const { data, isLoading } = useQuery({
    queryKey: ['parent-profile', rootId],
    queryFn: () =>
      execute(ParentProfileQuery, {
        where: { id: { _eq: rootId } }
      })
  });

  const [relatedProfile] = data?.roots ?? [];
  const [profileInfo] = relatedProfile?.profileInfos ?? [];
  console.log('DEBUG PROFILE', data?.roots);

  if (isLoading) {
    return (
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <div className="animate-pulse">
            <div className="mb-2 h-4 w-3/4 rounded bg-gray-300"></div>
            <div className="h-3 w-1/2 rounded bg-gray-300"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (!relatedProfile) {
    return (
      <Card className="shadow-sm">
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            Profile not found (ID: {rootId})
          </p>
        </CardContent>
      </Card>
    );
  }

  const logoUrl = profileInfo?.media?.find(findMedia.logo)?.url;
  const iconUrl = profileInfo?.media?.find(findMedia.icon)?.url;
  const imageUrl = iconUrl ?? logoUrl;

  return (
    <Card className="group h-fit shadow-sm transition-colors hover:bg-slate-100/5 hover:shadow-md ">
      <CardContent className="p-4">
        <Link href={`/profiles/${relatedProfile?.slug}`}>
          <div className="flex items-center space-x-3">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={`${profileInfo.name} logo`}
                className="h-10 w-10 rounded object-cover transition-transform group-hover:scale-105 group-hover:saturate-200"
              />
            ) : (
              <div className="grid h-10 w-10 place-items-center rounded bg-slate-200/30 text-xs">
                <GalleryThumbnailsIcon className="text-white/50" />
              </div>
            )}
            <div className="min-w-0 flex-1">
              <h4 className="truncate text-sm font-semibold">
                {profileInfo.name}
              </h4>
              {profileInfo.profileType?.name && (
                <p className="text-xs text-muted-foreground">
                  {profileInfo.profileType.name}
                </p>
              )}
            </div>
            <div className="rounded bg-slate-200/10 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white/50">
              {relationshipType ?? title}
            </div>
          </div>
        </Link>
      </CardContent>
    </Card>
  );
};

interface Relationship {
  rootId: string;
  relationshipType: string;
}
export type ParentRelationshipsSectionProps = {
  isParentOf?: Relationship[] | null;
  isChildOf?: Relationship[] | null;
};

export const ParentRelationshipsSection = ({
  isParentOf = [],
  isChildOf = []
}: ParentRelationshipsSectionProps) => {
  if (!isParentOf || !isChildOf) return null;
  if ([...isParentOf, ...isChildOf].length === 0) return null;

  return (
    <div className="flex flex-col gap-1 md:min-w-[350px]">
      <label className="mb-1 mt-2 text-sm text-muted-foreground xl:mt-0 xl:text-xs">
        Related Profiles
      </label>
      {isParentOf.map(root => (
        <ParentProfileCard
          key={root.rootId}
          rootId={root.rootId}
          title="CHILD"
          relationshipType={root.relationshipType}
        />
      ))}
      {isChildOf.map(root => (
        <ParentProfileCard
          key={root.rootId}
          rootId={root.rootId}
          title="PARENT"
          relationshipType={root.relationshipType}
        />
      ))}
    </div>
  );
};