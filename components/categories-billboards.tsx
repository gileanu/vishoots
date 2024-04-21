"use client";

import { Images } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Category } from "@/types";
import IconButton from "./ui/icon-button";

interface BillboardProps {
  category: Category;
}

const BillboardCategory: React.FC<BillboardProps> = ({ category }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/portfolio/${category.id}`);
  };
  return (
    <div className="bg-white dark:bg-background group rounded-md">
      <div className="h-[250px] rounded-md bg-gray-300 relative">
        <Image
          src={category.imageUrl}
          alt="Image"
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full left-2 bottom-2">
          <div className="flex justify-start">
            <IconButton
              className="flex gap-2 m-2 p-2"
              title="View Category"
              icon={<Images size={20} />}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="mt-1 mb-2">
        <h2 className="text-3xl">{category.name}</h2>
        <p className="text-sm font-light">{category.categoryDesc}</p>
      </div>
    </div>
  );
};

export default BillboardCategory;
