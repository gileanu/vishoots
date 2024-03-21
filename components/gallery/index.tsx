"use client";

import { Image as ImageType } from "@/types";

import Image from "next/image";
import Masonry from "react-masonry-css";
import { motion } from "framer-motion";
import Modal from "./modal";

import React, { useState } from "react";
import "photoswipe/style.css";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (image: any, index: any) => {
    setCurrentIndex(index);
    setClickedImg(image.url);
  };

  return (
    <>
      <Masonry breakpointCols={3} className="flex gap-3">
        {images.map((image, index) => (
          <motion.div className="relative" key={image.id}>
            <Image
              src={image.url}
              width={500}
              height={500}
              alt="Gallery Image"
              className="relative my-3 rounded-md"
              onClick={() => handleClick(image, index)}
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
