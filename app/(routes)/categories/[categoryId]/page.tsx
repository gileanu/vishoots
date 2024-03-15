import getCategory from "@/actions/get-category";
import getGalleries from "@/actions/get-galleries";
import GalleryCard from "@/components/gallery-card";
import GalleryContainer from "@/components/gallery-container";
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
        {galleries.length === 0 && <NoResults />}
        <div className="my-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-30">
          {galleries.map((item) => (
            <GalleryCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </>
  );
};

export default CategoryPage;
