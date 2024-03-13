"use client";

import { Billboard as BillboardType, Category } from "@/types";
import CategoryContainer from "./category-container";
import { Button } from "./ui/button";
import Link from "next/link";

interface BillboardProps {
  data: BillboardType;
  info: Category;
}

const BillboardCategory: React.FC<BillboardProps> = ({ data, info }) => {
  return (
    <>
      <div className="overflow-hidden bg-background/85">
        <div
          className="h-screen overflow-hidden bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${data?.imageUrl})` }}
        >
          <CategoryContainer>
            <div className="h-full ml-auto flex justify-start">
              <h1 className="text-2xl lg:text-4xl font-bold tracking-tight backdrop-blur-md bg-white/85 dark:bg-background/85 p-4 rounded-md">
                {data.label}
              </h1>
            </div>
            <Button asChild className="mt-4" size="lg" variant="outline">
              <Link href={`/categories/${info.id}`}>View Gallery</Link>
            </Button>
          </CategoryContainer>
        </div>
      </div>
    </>
  );
};

export default BillboardCategory;
