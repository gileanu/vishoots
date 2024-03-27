"use client";

import { Category } from "@/types";
import { Separator } from "./separator";
import { Heading1 } from "./heading1";

interface BillboardProps {
  data: Category;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="pt-5">
      <div
        className="rounded-xl relative aspect-[16/7] md:asptect-[2.4/1] overflow-hidden bg-cover bg-center shadow-md mb-5"
        style={{ backgroundImage: `url(${data?.imageUrl})` }}
      ></div>
      <Heading1 title={data.name} description={data.categoryDesc} />
      <Separator />
    </div>
  );
};

export default Billboard;
