import Container from "@/components/page-container";
import { stringify } from "querystring";

const IndGalleryPage = async ({
  params,
}: {
  params: { name: string; id: boolean };
}) => {
  return (
    <Container>
      <div>
        <div>Name is: {params.name}</div>
      </div>
    </Container>
  );
};

export default IndGalleryPage;
