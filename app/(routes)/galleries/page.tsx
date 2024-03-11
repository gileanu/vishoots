import getBillboards from "@/actions/get-billboards";
import getCategories from "@/actions/get-categories";
import Container from "@/components/page-container";

const GalleryPageCategories = async () => {
  const billboards = await getBillboards();
  const categories = await getCategories();
  console.log(categories);
  return (
    <Container>
      <div>Gallery Page by categories</div>
    </Container>
  );
};

export default GalleryPageCategories;
