import getCategories from "@/actions/get-categories";
import CategoriesAll from "@/components/categories-all";
import { Heading1 } from "@/components/ui/heading1";

export const revalidate = 0;

const PortfolioPage = async () => {
  const categories = await getCategories();
  return (
    <>
      <Heading1
        title="Explore categories"
        description="Each one tells a story"
      />
      <CategoriesAll data={categories} />
    </>
  );
};

export default PortfolioPage;
