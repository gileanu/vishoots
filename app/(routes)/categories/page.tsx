import getGalleries from "@/actions/get-galleries";
import GalleryList from "@/components/gallery-list";
import Container from "@/components/page-container";
import { Heading1 } from "@/components/ui/heading1";

const GalleryPageCategories = async () => {
  const galleries = await getGalleries({ isFeatured: true });
  console.log(galleries);
  return (
    <>
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
