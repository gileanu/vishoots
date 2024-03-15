"use client";

import { Gallery } from "@/types";
import Image from "next/image";
import IconButton from "./ui/icon-button";
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";

interface GalleryCardProps {
  data: Gallery;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ data }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/categories/gallery/${data.id}`);
  };
  return (
    <div
      className="bg-white dark:bg-background group cursor-pointer rounded-md border p-3 space-y-4 shadow-md"
      onClick={handleClick}
    >
      <div className="aspect-square rounded-md bg-gray-300 relative shadow-md">
        <Image
          src={data?.featImage}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              className="flex gap-2 m-2 p-2"
              title="View Gallery"
              icon={<Expand size={20} className="text-gray-500" />}
            />
          </div>
        </div>
      </div>
      <div>
        <p>{data.title}</p>
        <p className="text-xs text-muted-foreground">{data.category?.name}</p>
      </div>
    </div>
  );
};

export default GalleryCard;
