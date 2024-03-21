"use client";

import { Gallery } from "@/types";
import NoResults from "./ui/s-no-results";
import GalleryCard from "./gallery-card";
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
      delay: 0.1 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

interface GalleryListProps {
  items: Gallery[];
}

const GalleryList: React.FC<GalleryListProps> = ({ items }) => {
  return (
    <>
      {items.length === 0 && <NoResults />}
      <div className="my-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 z-30">
        {items.map((item, index) => (
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
            <GalleryCard key={item.id} data={item} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default GalleryList;
