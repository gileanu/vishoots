"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface HeadingProps {
  title: string;
  description: string;
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
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });
  return (
    <div>
      <span>
        <h2 className="sr-only">{title}</h2>
        <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">
          <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.02 }}
            aria-hidden
          >
            {title.split("").map((char) => (
              <motion.span variants={defaultAnim} key={char}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </h2>
      </span>
      <span>
        <p className="sr-only">{description}</p>
        <p className="text-sm text-muted-foreground">
          <motion.span
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.02 }}
            aria-hidden
          >
            {description.split("").map((char) => (
              <motion.span variants={defaultAnim} key={char}>
                {char}
              </motion.span>
            ))}
          </motion.span>
        </p>
      </span>
    </div>
  );
};
