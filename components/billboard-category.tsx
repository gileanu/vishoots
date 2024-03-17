"use client";

import { Billboard as BillboardType, Category } from "@/types";
import IconButton from "./ui/icon-button";
import { Images } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BillboardProps {
  data: BillboardType;
  info: Category;
}

const BillboardCategory: React.FC<BillboardProps> = ({ data, info }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/categories/${info.id}`);
  };
  return (
    <div
      className="bg-white dark:bg-background group cursor-pointer rounded-md border p-3 space-y-4 shadow-md"
      onClick={handleClick}
    >
      <div className="h-[250px] md:h-[450px] rounded-md bg-gray-300 relative shadow-md">
        <Image
          src={data?.imageUrl}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-start">
            <IconButton
              className="flex justify-start gap-2 m-2 p-2"
              title="View Category"
              icon={<Images size={20} className="text-gray-500" />}
            />
          </div>
        </div>
      </div>
      <div>
        <h1 className="font-bold text-2xl">{info.name}</h1>
        <p className="text-xs text-muted-foreground">{data.label}</p>
      </div>
    </div>
  );
};

export default BillboardCategory;
