"use client";

import { Skeleton } from "@/components/ui/skeleton";

const GalleryLoading = () => {
  return (
    <>
      <div>
        <Skeleton className="min-h-[700px]" />
      </div>
      <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        <div className="flex flex-col gap-2 mb-3">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-[150px]" />
          <Skeleton className="h-[350px]" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-[450px]" />
          <Skeleton className="h-[550px]" />
        </div>
        <div className="flex flex-col gap-2">
          <Skeleton className="h-[550px]" />
          <Skeleton className="h-[250px]" />
          <Skeleton className="h-[150px]" />
        </div>
      </div>
    </>
  );
};

export default GalleryLoading;
