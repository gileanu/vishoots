"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ReactNode, FC, useState, useEffect } from "react";

// ROUTER
import { useRouter } from "next/navigation";

// TYPES
interface ILayoutProps {
  children: ReactNode;
}

const PageTransitionLayout: FC<ILayoutProps> = ({ children }) => {
  const router = useRouter();
  return (
    <AnimatePresence mode={"wait"}>
      <motion.div
        key={router.push.name}
        initial="initialState"
        animate="animateState"
        exit="exitState"
        transition={{
          type: "tween",
          duration: 0.5,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {
            opacity: 0,
          },
        }}
        className="min-h-screen w-full" // Feel free to add your classes here
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransitionLayout;
