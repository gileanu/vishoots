"use client";

import { Image as ImageType } from "@/types";

import Image from "next/image";
import Masonry from "react-masonry-css";
import Modal from "./modal";

import React, { useState } from "react";
import "photoswipe/style.css";
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
      delay: 0.02 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (image: any) => {
    setClickedImg(image.url);
  };

  const breakpointColumnsObj = {
    default: 3,
    700: 2,
    500: 1,
  };

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-3 pb-3"
      >
        {images.map((image, index) => (
          <motion.div
            className="relative"
            key={image.id}
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            whileHover={{ scale: 1.02 }}
            custom={index}
          >
            <Image
              src={image.url}
              width={500}
              height={500}
              alt="Gallery Image"
              className="relative my-3 rounded-md sm:hover:opacity-50 transition-all cursor-pointer"
              onClick={() => handleClick(image)}
            />
          </motion.div>
        ))}
      </Masonry>
      {clickedImg && (
        <Modal clickedImg={clickedImg} setClickedImg={setClickedImg} />
      )}
    </>
  );
};

export default Gallery;
