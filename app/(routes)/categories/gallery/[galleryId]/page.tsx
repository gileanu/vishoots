import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import GalleryList from "@/components/gallery-list";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/gallery";
import GalleryContainer from "./components/gallery-container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Heading2 } from "@/components/ui/heading2";

export const revalidate = 0;

interface IndGalleryPageProps {
  params: {
    galleryId: string;
  };
}

const IndGalleryPage: React.FC<IndGalleryPageProps> = async ({ params }) => {
  const gallery = await getGallery(params.galleryId);
  const suggestedGalleries = await getGalleries({
    categoryId: gallery?.category.id,
  });
  return (
    <>
      <div
        className="relative h-screen sm:h-screen overflow-hidden bg-cover bg-center bg-inherit sm:bg-fixed bg"
        style={{ backgroundImage: `url(${gallery.featImage})` }}
      ></div>
      <GalleryContainer>
        <div className="mt-5">
          <Heading1 title={gallery.title} description={gallery.category.name} />
        </div>
        <Gallery images={gallery.images} />
        <div className="text-xs">
          {gallery.location && <p>{gallery.location}</p>}
          {gallery.specs && <p>{gallery.specs}</p>}
        </div>
        <div className="w-full sm:w-[350px] flex gap-2 py-4">
          <Button asChild size="lg" variant="default" className="w-1/2">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild size="lg" variant="secondary" className="w-1/2">
            <Link href="/categories">Categories</Link>
          </Button>
        </div>
        <Heading2
          title="View related Galleries"
          description="Galleries in the same category"
        />
        <Separator />
        <GalleryList items={suggestedGalleries} />
      </GalleryContainer>
    </>
  );
};

export default IndGalleryPage;
