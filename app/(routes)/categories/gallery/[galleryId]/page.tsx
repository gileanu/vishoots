import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import GalleryList from "@/components/gallery-list";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/gallery";
import Container from "@/components/page-container";

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
      <Container>
        <Gallery images={gallery.images} />
        <Heading1
          title="View related Galleries"
          description="Galleries in the same category"
        />
        <Separator />
        <GalleryList items={suggestedGalleries} />
      </Container>
    </>
  );
};

export default IndGalleryPage;
