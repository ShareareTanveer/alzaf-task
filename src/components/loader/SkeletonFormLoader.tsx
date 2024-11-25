import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonFormLoader() {
  return (
    <div className="space-y-5 p-5">
      <Skeleton className="h-6 w-1/2 mb-4" />
      <div className="space-y-3">
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-10 w-full rounded-md" />
        <Skeleton className="h-24 w-full rounded-md" />
      </div>
    </div>
  );
}
