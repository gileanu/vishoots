import { Category } from "@/types";
import CategoryAllInner from "./categories-all-inner";

interface CategoriesAllProps {
  data: Category[];
}

const CategoriesAll: React.FC<CategoriesAllProps> = ({ data }) => {
  const categories = data.map((item) => ({
    categoryId: item.id,
  }));
  return (
    <div>
      {categories.map((item) => (
        <CategoryAllInner key={item.categoryId} params={item.categoryId} />
      ))}
    </div>
  );
};

export default CategoriesAll;
