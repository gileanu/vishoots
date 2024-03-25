"use client";

import { Category } from "@/types";
import NoResults from "./ui/s-no-results";
import BillboardCategory from "./billboard-category";

interface CategoriesAllProps {
  data: Category[];
}

const CategoriesAll: React.FC<CategoriesAllProps> = ({ data }) => {
  const categories = data.map((item) => ({
    categoryId: item.id,
    categoryImage: item.imageUrl,
    categoryDesc: item.categoryDesc,
    categoryName: item.name,
  }));
  return (
    <div className="my-10 flex flex-col gap-4">
      {data.length === 0 && <NoResults />}
      {categories.map((item) => (
        <BillboardCategory
          key={item.categoryId}
          catId={item.categoryId}
          catImg={item.categoryImage}
          catDesc={item.categoryDesc}
          catName={item.categoryName}
        />
      ))}
    </div>
  );
};

export default CategoriesAll;
