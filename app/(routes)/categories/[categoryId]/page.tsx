import getCategory from "@/actions/get-category";
import getGalleries from "@/actions/get-galleries";
import GalleryCard from "@/components/gallery-card";
import GalleryContainer from "@/components/gallery-container";
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
      <Billboard data={category.billboard} />
      <GalleryContainer>
        {galleries.length === 0 && <NoResults />}
        <div className="my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 z-30">
          {galleries.map((item) => (
            <GalleryCard key={item.id} data={item} />
          ))}
        </div>
      </GalleryContainer>
    </>
  );
};

export default CategoryPage;
