"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

export const Heading2: React.FC<HeadingProps> = ({ title, description }) => {
  const titleArray = Array.isArray(title) ? title : [title];
  const descArray = Array.isArray(description) ? description : [description];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div>
      <h2 className="sr-only">{title}</h2>
      <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
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
      </h2>
      <p className="sr-only">{description}</p>
      <p className="text-sm font-light text-muted-foreground">
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
    </div>
  );
};
