"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const CategoriesLoading = () => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <Skeleton className="h-12 w-1/4" />
        <Skeleton className="h-6 w-1/2" />
      </div>
      <Separator className="my-4" />
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-12" />
        </div>
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </>
  );
};

export default CategoriesLoading;
