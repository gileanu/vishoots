"use client";

import { Gallery } from "@/types";
import NoResults from "./ui/s-no-results";
import GalleryCardHome from "./gallery-card-home";
import { ScrollArea, ScrollBar } from "./ui/scroll-area";
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
    },
  }),
};

interface GalleryListProps {
  items: Gallery[];
}

const GalleryListHome: React.FC<GalleryListProps> = ({ items }) => {
  return (
    <>
      <ScrollArea className="mb-5">
        {items.length === 0 && <NoResults />}
        <div className="mb-4 flex flex-row gap-4 overflow-hidden">
          {items.map((item, index) => (
            <motion.li
              className="mb-4"
              key={item.id}
              variants={fadeInAnimation}
              initial="initial"
              whileInView="animate"
              viewport={{
                once: true,
              }}
              custom={index}
            >
              <GalleryCardHome key={item.id} data={item} />
            </motion.li>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default GalleryListHome;
