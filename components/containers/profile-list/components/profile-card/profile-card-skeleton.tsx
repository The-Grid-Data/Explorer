import { Skeleton } from '@/components/ui/skeleton';
import { siteConfig } from '@/lib/site-config';

export const ProfileCardSkeleton = () => (
  <div className="">
    <div className="mt-0 flex w-full animate-pulse flex-col gap-4 rounded-xl border-2 border-primary/10 p-6">
      <div className=" flex gap-4">
        <div className="h-[100px] w-[220px] rounded-xl">
          <Skeleton className="h-[100px] w-[220px] rounded-xl" />
        </div>
        <div className="mt-6 flex w-full flex-col gap-4">
          <Skeleton className="h-6 w-1/4" />
          <div className="flex w-full gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-4 w-4" />
          </div>
        </div>
      </div>
      {!siteConfig.featureFlags.hideTagsOnProfileCards && (
        <div className="flex w-full gap-2">
          <Skeleton className="h-12 w-20" />
          <Skeleton className="h-12 w-20" />
          <Skeleton className="h-12 w-20" />
        </div>
      )}
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  </div>
);
