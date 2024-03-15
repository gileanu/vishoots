import { Gallery } from "@/types";

interface GalleryInfoProps {
  data: Gallery;
}

const GalleryInfo: React.FC<GalleryInfoProps> = ({ data }) => {
  return (
    <div className="w-[350px] relative">
      <div className="flex flex-col gap-y-1 border shadow-md rounded-md p-4 backdrop-blur-md bg-white/85 dark:bg-background/85  max-w-[350px]">
        <p className="text-sm text-gray-400">Gallery:</p>
        <h1 className="text-2xl font-bold w-full">{data.title}</h1>
        <p className="text-sm text-gray-400">Category:</p>
        <p>{data.category.name}</p>
        <p className="text-sm text-gray-600">{data.location}</p>
        <p className="text-sm text-gray-600">{data.specs}</p>
      </div>
    </div>
  );
};

export default GalleryInfo;
