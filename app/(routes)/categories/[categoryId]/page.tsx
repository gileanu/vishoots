import getCategory from "@/actions/get-category";
import getGalleries from "@/actions/get-galleries";
import GalleryList from "@/components/gallery-list";
import Container from "@/components/page-container";
import Billboard from "@/components/ui/billboard";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
}

const CategoryPage: React.FC<CategoryPageProps> = async ({ params }) => {
  const galleries = await getGalleries({ categoryId: params.categoryId });
  const category = await getCategory(params.categoryId);
  return (
    <>
      <Container>
        <Billboard data={category.billboard} category={category} />
        <GalleryList items={galleries} />
      </Container>
    </>
  );
};

export default CategoryPage;
