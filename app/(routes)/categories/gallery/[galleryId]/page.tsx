import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import GalleryContainer from "@/components/gallery-container";
import GalleryList from "@/components/gallery-list";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/gallery";
import GalleryFeatImg from "@/components/gallery/feat-img";
import GalleryInfo from "@/components/info";

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
    <GalleryContainer>
      <div className="px-4 py-10 sm:px-6 lg:px-8 pt-24">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <Gallery images={gallery.images} />
          <GalleryInfo data={gallery} />
        </div>
        <Heading1
          title="View related Galleries"
          description="Galleries in the same category"
        />
        <Separator />
        <GalleryList items={suggestedGalleries} />
      </div>
    </GalleryContainer>
  );
};

export default IndGalleryPage;
