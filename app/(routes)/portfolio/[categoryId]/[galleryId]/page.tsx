import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import Gallery from "@/components/gallery";
import GalleryCard from "@/components/gallery-card";
import NoResults from "@/components/no-results";
import { Heading1 } from "@/components/ui/heading1";
import { Heading2 } from "@/components/ui/heading2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";
import React from "react";

export const revalidate = 0;

interface CategoryPageIndProps {
  params: {
    galleryId: string;
    categoryId: string;
  };
}

const CategoryPageInd: React.FC<CategoryPageIndProps> = async ({ params }) => {
  const gallery = await getGallery(params.galleryId);
  const suggestedGalleries = await getGalleries({
    categoryId: gallery?.category.id,
  });
  return (
    <div>
      <div className="h-screen relative">
        <Image
          src={gallery.featImage}
          alt={gallery.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="min-h-80 flex flex-col gap-2 items-start justify-center">
        <span className="text-5xl lg:text-7xl font-serif">{gallery.title}</span>
        <span className="text-4xl lg:text-5xl text-muted-foreground font-light">
          {gallery.category.name}
        </span>
        <div className="flex flex-col sm:flex-row gap-1 text-xs">
          {gallery.location && (
            <>
              <p className="text-muted-foreground">Location:</p>
              <span>{gallery.location}</span>
            </>
          )}
          {gallery.specs && (
            <>
              {" "}
              <Separator
                orientation="vertical"
                className="h-5 hidden sm:block"
              />
              <p className="text-muted-foreground">Shot on:</p>
              <span>{gallery.specs}</span>
            </>
          )}
        </div>
      </div>
      <Gallery images={gallery.images} />
      <Heading2
        title="View related galleries"
        description="In the same category"
      />
      <ScrollArea className="mb-5 mt-2">
        {suggestedGalleries.length === 0 && <NoResults />}
        <ul className="flex flex-row gap-4 overflow-hidden">
          {suggestedGalleries.map((item, index) => (
            <li className="w-[300px]" key={item.id}>
              <GalleryCard data={item} index={index} key={item.id} />
            </li>
          ))}
        </ul>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryPageInd;
