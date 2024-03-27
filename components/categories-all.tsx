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
  return (
    <div className="mb-10 flex flex-col gap-4">
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
