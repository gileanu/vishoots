"use client";

import { Image as ImageType } from "@/types";
import Image from "next/image";

interface GalleryProps {
  images: ImageType[];
}

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <div className="my-10">
      <div className="flex flex-row gap-5 overflow-scroll">
        {images.map((image) => (
          <Image
            src={image.url}
            alt="Images"
            fill
            className="rounded-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
