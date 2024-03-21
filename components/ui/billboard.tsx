"use client";

import { Billboard as BillboardType, Category } from "@/types";
import { Separator } from "./separator";
import { Heading1 } from "./heading1";

interface BillboardProps {
  data: BillboardType;
  category: Category;
}

const Billboard: React.FC<BillboardProps> = ({ data, category }) => {
  return (
    <div className="pt-5 text-2xl md:text-3xl lg:text-6xl font-bold tracking-tight">
      <div
        className="rounded-xl relative aspect-[16/7] md:asptect-[2.4/1] overflow-hidden bg-cover bg-center shadow-md mb-5"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      ></div>
      <Heading1 title={category.name} description={data.label} />
      <Separator />
    </div>
  );
};

export default Billboard;
