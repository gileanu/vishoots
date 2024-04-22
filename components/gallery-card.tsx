"use client";

import { Gallery } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand } from "lucide-react";
import { useRouter } from "next/navigation";
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

interface GalleryCardProps {
  data: Gallery;
  index: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ data, index }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/portfolio/${data.category.id}/${data.id}`);
  };
  return (
    <motion.div
      variants={fadeInAnimation}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="group"
    >
      <div className="aspect-square bg-gray-300 relative z-10">
        <Image
          src={data.featImage}
          alt={data.title}
          fill
          className="aspect-square object-cover"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full left-2 bottom-2">
          <div className="flex justify-start">
            <IconButton
              className="flex gap-2 m-2 p-2"
              title="View Gallery"
              icon={<Expand size={20} />}
              onClick={handleClick}
            />
          </div>
        </div>
      </div>
      <div className="py-2">
        <h3 className="text-xl font-sans">{data.title}</h3>
        <p className="text-xs text-muted-foreground">{data.category?.name}</p>
      </div>
    </motion.div>
  );
};

export default GalleryCard;
