import getGalleries from "@/actions/get-galleries";
import getGallery from "@/actions/get-gallery";
import GalleryList from "@/components/gallery-list";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import Gallery from "@/components/gallery";
import GalleryInfo from "@/components/info";
import Image from "next/image";
import CategoryContainer from "@/components/category-container";

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
    <div>
      <CategoryContainer>
        <div className="h-screen">
          <Image
            src={gallery.featImage}
            fill
            alt="Feat Image"
            className="object-cover"
            quality={80}
            priority={true}
          ></Image>
          <div className="pt-24">
            <GalleryInfo data={gallery} />
          </div>
        </div>
        <Gallery images={gallery.images} />
        <Heading1
          title="View related Galleries"
          description="Galleries in the same category"
        />
        <Separator />
        <GalleryList items={suggestedGalleries} />
      </CategoryContainer>
    </div>
  );
};

export default IndGalleryPage;
