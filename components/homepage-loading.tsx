"use client";

import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

const FeatGallLoading = () => {
  return (
    <>
      <div className="flex flex-row gap-4 overflow-hidden">
        <div className="flex flex-row gap-2 mb-3">
          <Skeleton className="h-[350px] w-[320px]" />
          <Skeleton className="h-[350px] w-[320px]" />
          <Skeleton className="h-[350px] w-[320px]" />
          <Skeleton className="h-[350px] w-[320px]" />
          <Skeleton className="h-[350px] w-[320px]" />
        </div>
      </div>
    </>
  );
};

export default FeatGallLoading;
