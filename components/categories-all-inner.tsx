import getCategory from "@/actions/get-category";
import BillboardCategory from "./billboard-category";

interface CategoryAllInnerProps {
  params: string;
}

const CategoryAllInner: React.FC<CategoryAllInnerProps> = async ({
  params,
}) => {
  const sinCategory = await getCategory(params);
  return (
    <>
      <BillboardCategory data={sinCategory.billboard} info={sinCategory} />
    </>
  );
};

export default CategoryAllInner;
