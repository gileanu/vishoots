"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC } from "react";

interface ILayoutProps {
  children: ReactNode;
}

export const revalidate = 0;

const Transition: FC<ILayoutProps> = ({ children }) => {
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 1,
          amount: 0.5,
          once: false,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
        }}
        className="min-h-screen w-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default Transition;
