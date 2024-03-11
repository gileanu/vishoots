import getBillboard from "@/actions/get-billboard";
import getBillboards from "@/actions/get-billboards";
import getCategories from "@/actions/get-categories";
import Container from "@/components/page-container";
import Billboard from "@/components/ui/billboard";

const GalleryPageCategories = async () => {
  const billboard = await getBillboard("35fb312e-89dd-44d3-9cf5-ae0642a086b8");
  const categories = await getCategories();
  console.log(categories);
  return (
    <>
      <Billboard data={billboard} />
      <Container>
        <div>Gallery Page by categories</div>
      </Container>
    </>
  );
};

export default GalleryPageCategories;
