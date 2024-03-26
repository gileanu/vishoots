import getCategories from "@/actions/get-categories";
import CategoriesAll from "@/components/categories-all";
import { Separator } from "@/components/ui/separator";
import Container from "@/components/page-container";
import { Heading2 } from "@/components/ui/heading2";

export const revalidate = 0;

const GalleryPageCategories = async () => {
  const categories = await getCategories();

  return (
    <>
      <Container>
        <Heading2
          title="View Galleries by category"
          description="Each category tells a story"
        />
        <Separator className="mb-10" />
        <CategoriesAll data={categories} />
      </Container>
    </>
  );
};

export default GalleryPageCategories;
