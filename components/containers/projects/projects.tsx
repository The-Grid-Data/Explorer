'use client';

import { useSearchProfilesQuery } from '@/lib/graphql/generated-graphql';
import { ProjectCard } from './components';

export const Projects = () => {
  const { data } = useSearchProfilesQuery({
    // where: { isMainProduct: { _eq: 1 } },
    limit: 10,
    offset: 0
  });

  return (
    <section className="mt-12 flex w-full flex-col gap-12">
      {data?.profiles?.map((profile, index) => (
        <ProjectCard key={index} profile={profile} />
      ))}
    </section>
  );
};
