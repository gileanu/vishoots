import getBillboards from "@/actions/get-billboards";
import getGalleries from "@/actions/get-galleries";
import BillboardCategory from "@/components/billboard-category";
import GalleryList from "@/components/gallery-list";
import Container from "@/components/page-container";
import { Heading1 } from "@/components/ui/heading1";

const GalleryPageCategories = async () => {
  const galleries = await getGalleries({ isFeatured: true });
  const billboards = await getBillboards();

  return (
    <>
      <div className="grid w-screen">
        {billboards.map((item) => (
          <BillboardCategory data={item} key={item.id} />
        ))}
      </div>
      <Container>
        <Heading1
          title="View featured Galleries"
          description="My favorite galleries"
        />
        <GalleryList items={galleries} />
      </Container>
    </>
  );
};

export default GalleryPageCategories;
