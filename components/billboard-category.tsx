"use client";

import { Billboard as BillboardType, Category } from "@/types";
import IconButton from "./ui/icon-button";
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";

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
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
      className="h-[500px] my-4 rounded-md shadow-md bg-cover bg-center group cursor-pointer"
    >
      <div className="h-full align-bottom">
        <div className="p-2 opacity-0 group-hover:opacity-100 transition gap-4">
          <IconButton
            className="flex gap-2 m-2 p-2"
            title="View Category"
            icon={<Expand size={20} className="text-gray-500" />}
            onClick={handleClick}
          />
        </div>
        <div className="p-2 mx-4 md:w-2/3 rounded-md backdrop-blur-md bg-white/85 dark:bg-background/85">
          <h1 className="font-bold text-xl">{data.label}</h1>
          <p>{info.name}</p>
        </div>
      </div>
    </div>
  );
};

export default BillboardCategory;
