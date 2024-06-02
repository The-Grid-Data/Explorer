import { Skeleton } from '@/components/ui/skeleton';

export const ProfileCardSkeleton = () => (
  <div className="">
    <div className="mt-10 flex w-full animate-pulse flex-col gap-2 rounded-xl border-2 border-primary/10 p-6">
      <div className="-mt-16 flex gap-2">
        <div className="h-20 w-20 rounded-full bg-white">
          <Skeleton className="h-20 w-20 rounded-full" />
        </div>
        <div className="mt-2 flex w-full flex-col gap-4">
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
      <div className="flex w-full gap-2">
        <Skeleton className="h-12 w-20" />
        <Skeleton className="h-12 w-20" />
        <Skeleton className="h-12 w-20" />
      </div>
      <div className="w-full space-y-2">
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    </div>
  </div>
);
