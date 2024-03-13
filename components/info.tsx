import { Gallery } from "@/types";

interface GalleryInfoProps {
  data: Gallery;
}

const GalleryInfo: React.FC<GalleryInfoProps> = ({ data }) => {
  return (
    <div className="flex flex-col gap-y-2 border shadow-md rounded-md p-4 backdrop-blur-md bg-white/85 dark:bg-background/85 mt-20 max-w-[330px]">
      <p className="text-sm text-gray-400">Gallery:</p>
      <h1 className="text-2xl font-bold w-full">{data.title}</h1>
      <p className="text-sm text-gray-400">Location:</p>
      <p>{data.location}</p>
      <p className="text-sm text-gray-400">Specs:</p>
      <p>{data.specs}</p>
      <p className="text-sm text-gray-400">From:</p>
      <p>{data.category.name}</p>
    </div>
  );
};

export default GalleryInfo;
