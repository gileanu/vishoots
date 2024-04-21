"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Separator } from "./separator";

interface HeadingProps {
  title: string | string[];
  description: string | string[];
}

const defaultAnim = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Heading1: React.FC<HeadingProps> = ({ title, description }) => {
  const titleArray = Array.isArray(title) ? title : [title];
  const descArray = Array.isArray(description) ? description : [description];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div>
      <h1 className="sr-only">{title}</h1>
      <h1 className="text-3xl md:text-4xl lg:text-5xl pb-1">
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.02 }}
          aria-hidden
        >
          {titleArray.map((line, index) => (
            <span className="block" key={index}>
              {line.split(" ").map((word, index) => (
                <span className="inline-block" key={index}>
                  {word.split("").map((char, index) => (
                    <motion.span variants={defaultAnim} key={index}>
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </h1>
      <p className="sr-only">{description}</p>
      <p className="text-md text-muted-foreground">
        <motion.span
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.02 }}
        >
          {descArray.map((line, index) => (
            <span className="block" key={index + 1}>
              {line.split(" ").map((word, index) => (
                <span className="inline-block" key={index + 2}>
                  {word.split("").map((char, index) => (
                    <motion.span variants={defaultAnim} key={index + 3}>
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.span>
      </p>
      <Separator className="mt-2 mb-4" />
    </div>
  );
};
