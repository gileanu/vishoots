"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const CategoriesLoading = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-12 w-24" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Separator className="my-4" />
      <div className="mb-10 w-full md:w-1/2 flex flex-col gap-2">
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-12 w-full" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-60 w-full" />
        </div>
      </div>
    </>
  );
};

export default CategoriesLoading;
