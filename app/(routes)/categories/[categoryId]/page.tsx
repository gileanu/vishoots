import getCategory from "@/actions/get-category";
import getGalleries from "@/actions/get-galleries";
import GalleryCard from "@/components/gallery-card";
import GalleryList from "@/components/gallery-list";
import Container from "@/components/page-container";
import Billboard from "@/components/ui/billboard";
import NoResults from "@/components/ui/s-no-results";

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
        <Billboard data={category.billboard} />
        <GalleryList items={galleries} />
      </Container>
    </>
  );
};

export default CategoryPage;
