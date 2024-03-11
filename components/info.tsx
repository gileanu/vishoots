import { Gallery } from "@/types";

interface GalleryInfoProps {
  data: Gallery;
}

const GalleryInfo: React.FC<GalleryInfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p>{data.location}</p>
      <p>{data.specs}</p>
    </div>
  );
};

export default GalleryInfo;
