"use client";

import { Billboard as BillboardType } from "@/types";
import { Separator } from "./separator";
import { Heading1 } from "./heading1";

interface BillboardProps {
  data: BillboardType;
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className="pt-10 text-2xl md:text-3xl lg:text-6xl font-bold tracking-tight">
      <Heading1 title={data.label} description="" />
      <Separator />
    </div>
  );
};

export default Billboard;
