'use client';

import { Badge } from '@/components/ui/badge';
import { paths } from '@/lib/routes/paths';
import Link from 'next/link';
import { TagIcon } from 'lucide-react';

type Tag = {
  tag?: {
    id: string;
    name: string;
  } | null;
};

export type ProfileTagsProps = {
  profileTags?: Tag[] | null;
};

export const ProfileTags = ({ profileTags }: ProfileTagsProps) => {
  if (!profileTags?.length) {
    return <span>-</span>;
  }

  return (
    <div className="flex flex-wrap gap-1">
      {profileTags.map(tag => {
        if (!tag.tag) return null;
        return (
          <Link
            key={tag.tag.id}
            href={`${paths.base}?tags=${tag.tag.id}`}
            className="text-sm font-semibold text-primary hover:text-primary/60"
          >
            <Badge
              variant="secondary"
              className="flex w-fit items-center gap-2"
            >
              <TagIcon size={16} /> {tag.tag.name}
            </Badge>
          </Link>
        );
      })}
    </div>
  );
};
