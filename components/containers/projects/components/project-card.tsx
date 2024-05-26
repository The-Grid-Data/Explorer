'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { SearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { ProjectCardDataPoint } from './project-card-data-point';
import Image from 'next/image';
import { CardFeature } from './card-feature';
import { Separator } from '@/components/ui/separator';

type Profile = SearchProfilesQuery['profiles'][0];

export type ProjectCardProps = {
  profile: Profile;
};

export const ProjectCard = ({ profile }: ProjectCardProps) => {
  return (
    <div className="rounded-lg border border-black p-4">
      <div className="-mt-12 flex flex-col gap-2">
        <div className="relative flex w-full items-center gap-2">
          <div className="shrink-0 rounded-full border-[8px] border-white">
            {profile.logo && (
              <Image src={profile.logo} alt="Project" width={64} height={64} />
            )}
            {!profile.logo && (
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-300">
                <span className="p-4 text-center text-xl font-medium text-muted-foreground">
                  {profile?.name.at(0)?.toUpperCase()}
                </span>
              </div>
            )}
          </div>
          <div className="w-full border-black">
            <h3 className="text-2xl font-semibold">{profile.name}</h3>
          </div>
          {/* <div className="absolute left-[32px] -z-10 h-8 w-full rounded-r-xl bg-black" /> */}
        </div>

        <div className="flex gap-2">
          <CardFeature label="Sector" value={profile.profileSector?.name} />
          <CardFeature
            label="Main Product Type"
            value={profile.mainProduct.at(0)?.productType?.name}
          />
          <CardFeature label="Status" value={profile.profileStatus?.name} />
          <CardFeature
            label="Issued Assets"
            value={
              Boolean(profile.assets.length) &&
              profile.assets.map(asset => asset.ticker).join(', ')
            }
          />
        </div>
        <div className="space-y-1">
          <ProjectCardDataPoint label="Tagline" value={profile.tagLine} />
          <ProjectCardDataPoint
            label="Short Description"
            value={profile.descriptionShort}
          />
        </div>
      </div>
    </div>
  );
};
