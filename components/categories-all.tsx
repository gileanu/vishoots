import { Category } from "@/types";
import CategoryAllInner from "./categories-all-inner";
import NoResults from "./ui/s-no-results";

interface CategoriesAllProps {
  data: Category[];
}

const CategoriesAll: React.FC<CategoriesAllProps> = ({ data }) => {
  const categories = data.map((item) => ({
    categoryId: item.id,
  }));
  return (
    <div className="mb-10">
      {data.length === 0 && <NoResults />}
      {categories.map((item) => (
        <CategoryAllInner key={item.categoryId} params={item.categoryId} />
      ))}
    </div>
  );
};

export default CategoriesAll;
