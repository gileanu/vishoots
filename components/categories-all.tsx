"use client";

import { Category } from "@/types";
import NoResults from "./ui/s-no-results";
import BillboardCategory from "./billboard-category";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

interface CategoriesAllProps {
  data: Category[];
}

const CategoriesAll: React.FC<CategoriesAllProps> = ({ data }) => {
  const categories = data.map((item) => ({
    categoryId: item.id,
    categoryImage: item.imageUrl,
    categoryDesc: item.categoryDesc,
    categoryName: item.name,
  }));
  return (
    <div className="my-10 flex flex-col gap-4">
      {data.length === 0 && <NoResults />}
      {categories.map((item, index) => (
        <motion.div
          key={item.categoryId}
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <BillboardCategory
            key={item.categoryId}
            catId={item.categoryId}
            catImg={item.categoryImage}
            catDesc={item.categoryDesc}
            catName={item.categoryName}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default CategoriesAll;
