import getCategory from "@/actions/get-category";
import getGalleries from "@/actions/get-galleries";
import GalleryCard from "@/components/gallery-card";
import NoResults from "@/components/no-results";
import { Heading1 } from "@/components/ui/heading1";

export const revalidate = 0;

interface CategoryPageIndProps {
  params: {
    categoryId: string;
  };
}

const CategoryPageInd: React.FC<CategoryPageIndProps> = async ({ params }) => {
  const category = await getCategory(params.categoryId);
  const galleries = await getGalleries({ categoryId: params.categoryId });
  return (
    <div>
      <Heading1 title={category.name} description={category.categoryDesc} />
      {galleries.length === 0 && <NoResults />}
      <ul className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleries.map((item, index) => (
          <li key={item.id}>
            <GalleryCard data={item} index={index} key={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPageInd;
