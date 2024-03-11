import getBillboard from "@/actions/get-billboard";
import GalleryContainer from "@/components/gallery-container";

export const revalidate = 0;

interface CategoryPageIndProps {
  billboardId: string;
}

const CategoryPageInd: React.FC<CategoryPageIndProps> = async ({
  billboardId,
}) => {
  const billboard = await getBillboard(billboardId);
  console.log(billboard);
  return (
    <>
      <GalleryContainer>
        <div>hello</div>
      </GalleryContainer>
    </>
  );
};

export default CategoryPageInd;
