"use client";

import { Image as ImageType } from "@/types";
import Image from "next/image";
import { motion } from "framer-motion";

interface GalleryProps {
  images: ImageType[];
}

const fadeInAnimation = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.03 * index,
      type: "",
      stiffness: 20,
    },
  }),
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <>
      <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            className="flex flex-row items-center justify-center cursor-pointer"
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.1 },
              opacity: 0.55,
            }}
            whileTap={{ scale: 1 }}
          >
            <Image
              alt={image.id}
              src={image.url}
              className="rounded-md object-cover w-[450px] h-[250px]"
              width={250}
              height={250}
              quality={75}
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
