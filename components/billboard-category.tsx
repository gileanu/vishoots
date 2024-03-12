"use client";

import { Billboard as BillboardType, Category } from "@/types";
import CategoryContainer from "./category-container";

interface BillboardProps {
  data: BillboardType;
}

const BillboardCategory: React.FC<BillboardProps> = ({ data }) => {
  return (
    <>
      <div className="overflow-hidden">
        <div
          className="h-screen overflow-hidden bg-cover md:bg-fixed bg-center"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        >
          <CategoryContainer>
            <div className="h-full ml-auto flex items-center justify-start">
              <h1 className="font-bold text-2xl md:text-4xl backdrop-blur-md bg-white/85 dark:bg-background/85 p-4 rounded-lg">
                {data.label}
              </h1>
            </div>
          </CategoryContainer>
        </div>
      </div>
    </>
  );
};

export default BillboardCategory;
