"use client";

import { Skeleton } from "@/components/ui/skeleton";

const GalleryLoading = () => {
  return (
    <div>
      <Skeleton className="h-[300px] md:h-[500px]" />
    </div>
  );
};

export default GalleryLoading;
