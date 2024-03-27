import getCategories from "@/actions/get-categories";
import CategoriesAll from "@/components/categories-all";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/page-container";
import { Heading1 } from "@/components/ui/heading1";

export const revalidate = 0;

const GalleryPageCategories = async () => {
  const categories = await getCategories();

  return (
    <>
      <Container>
        <Heading1
          title="View Galleries by category"
          description="Each category tells a story"
        />
        <Separator />
        <CategoriesAll data={categories} />
      </Container>
    </>
  );
};

export default GalleryPageCategories;
