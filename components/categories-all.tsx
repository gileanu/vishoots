"use client";

import { Category } from "@/types";

import { motion } from "framer-motion";
import NoResults from "./no-results";
import BillboardCategory from "./categories-billboards";
import { Suspense } from "react";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

interface CategoriesAllProps {
  data: Category[];
}

const CategoriesAll: React.FC<CategoriesAllProps> = ({ data }) => {
  return (
    <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.length === 0 && <NoResults />}
      {data.map((item, index) => (
        <motion.div
          key={item.id}
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
        >
          <BillboardCategory key={item.id} category={item} />
        </motion.div>
      ))}
    </div>
  );
};

export default CategoriesAll;
