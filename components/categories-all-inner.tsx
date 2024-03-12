import getBillboard from "@/actions/get-billboard";
import getCategory from "@/actions/get-category";
import Billboard from "./ui/billboard";
import BillboardCategory from "./billboard-category";
import { Separator } from "./ui/separator";

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
