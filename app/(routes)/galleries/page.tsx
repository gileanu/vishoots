import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import Container from "@/components/page-container";
import Billboard from "@/components/ui/billboard";

const GalleryPage = async () => {
  const billboard = await getBillboard("67b56408-2506-4020-ac2d-0903e2e6c65e");
  const category = await getCategories();
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
      </div>
    </Container>
  );
};

export default GalleryPage;
