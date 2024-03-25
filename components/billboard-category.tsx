"use client";

import IconButton from "./ui/icon-button";
import { Images } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface BillboardProps {
  catId: string;
  catImg: string;
  catDesc: string;
  catName: string;
}

const BillboardCategory: React.FC<BillboardProps> = ({
  catId,
  catDesc,
  catImg,
  catName,
}) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/categories/${catId}`);
  };
  return (
    <div
      className="bg-white dark:bg-background group cursor-pointer rounded-md border p-3 space-y-4 shadow-md"
      onClick={handleClick}
    >
      <div className="h-[250px] md:h-[450px] rounded-md bg-gray-300 relative shadow-md">
        <Image
          src={catImg}
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
        <h1 className="font-bold text-2xl">{catName}</h1>
        <p className="text-xs text-muted-foreground">{catDesc}</p>
      </div>
    </div>
  );
};

export default BillboardCategory;
