import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import GalleryList from "@/components/gallery-list";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/gallery";
import GalleryContainer from "./components/gallery-container";

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

        <div className="text-xs pb-5">
          {gallery.location && <p>Location: {gallery.location}</p>}
          {gallery.specs && <p>Specs: {gallery.specs}</p>}
        </div>
        <Heading1
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
