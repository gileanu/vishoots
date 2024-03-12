import { Billboard as BillboardType } from "@/types";
import { Separator } from "./separator";
import GalleryContainer from "../gallery-container";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden">
        <div
          className="h-screen overflow-hidden bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        ></div>
      </div>
      <GalleryContainer>
        <div className="pt-4">
          <div className="font-bold text-3xl sm:text-5xl lg:text-6xl">
            {data.label}
          </div>
        </div>
        <Separator />
      </GalleryContainer>
    </>
  );
};

export default Billboard;
