import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import Gallery from "@/components/gallery";
import GalleryCard from "@/components/gallery-card";
import NoResults from "@/components/no-results";
import { Button } from "@/components/ui/button";
import { Heading2 } from "@/components/ui/heading2";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Send } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
      <div className="h-[300px] md:h-[500px] relative">
        <Image
          src={gallery.featImage}
          alt={gallery.title}
          fill
          className="object-cover rounded-md"
        />
      </div>
      <div className="bg-muted rounded-md pl-4 mt-3 min-h-80 flex flex-col gap-2 items-start justify-center">
        <span className="text-4xl md:text-5xl lg:text-7xl font-serif">
          {gallery.title}
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl text-muted-foreground font-light">
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
      <div className="flex flex-row items-center justify-start my-16 gap-2">
        <Button asChild variant="outline" size="lg">
          <Link href={`/portfolio/${params.categoryId}`}>
            <ArrowLeft className="mr-4 h-4 w-4" />
            Back
          </Link>
        </Button>
        <Separator orientation="vertical" className="hidden sm:block" />
        <Button asChild variant="default" size="lg">
          <Link href={`/contact`}>
            <Send className="mr-4 h-4 w-4" />
            Contact
          </Link>
        </Button>
      </div>
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
