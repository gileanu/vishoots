import getCategories from "@/actions/get-categories";
import getGalleries from "@/actions/get-galleries";
import CategoriesAll from "@/components/categories-all";
import GalleryList from "@/components/gallery-list";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/page-container";

const GalleryPageCategories = async () => {
  const galleries = await getGalleries({ isFeatured: true });
  const categories = await getCategories();

  return (
    <>
      <Container>
        <Heading1
          title="View Galleries by category"
          description="Each category tells a story"
        />
        <Separator className="mb-10" />
        <CategoriesAll data={categories} />
        <Heading1
          title="View featured Galleries"
          description="My favorite galleries"
        />
        <Separator />
        <GalleryList items={galleries} />
      </Container>
    </>
  );
};

export default GalleryPageCategories;
