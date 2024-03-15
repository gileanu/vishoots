import { Billboard as BillboardType } from "@/types";
import { Separator } from "./separator";
import GalleryContainer from "../gallery-container";
import Container from "../page-container";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden">
        <div
          className="h-[250px] md:h-[450px] rounded-md overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        ></div>
      </div>
      <div className="font-bold text-3xl py-4 sm:text-5xl lg:text-6xl">
        {data.label}
        <Separator />
      </div>
    </>
  );
};

export default Billboard;
