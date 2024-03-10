import getCategories from "@/actions/get-categories";
import Container from "@/components/page-container";
import Test from "./components/test";
import getBillboards from "@/actions/get-billboards";

const GalleryPage = async () => {
  const categories = await getCategories();
  const billboards = await getBillboards();
  return (
    <Container>
      <div>There are {categories.length} categories</div>
      <Test data={categories} billboards={billboards} />
    </Container>
  );
};

export default GalleryPage;
