"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Ship, Terminal } from "lucide-react";
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

export function WorkTimeline() {
  return (
    <div className="w-full flex px-4 pt-3 pb-12">
      <div className="1/2 pr-4 flex flex-col justify-between">
        <p>2024</p>
        <p>2023</p>
        <p className="text-right">...</p>
        <p>2022</p>
        <p>2021</p>
        <p>2020</p>
      </div>
      <div className="w-full border-l pl-4">
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom="1"
        >
          <Alert className="my-4 shadow-md bg-primary/90 text-primary-foreground">
            <Ship className="h-4 w-4 mt-0.5" color="white" />
            <AlertTitle className="flex items-center gap-x-2">
              Princess Cruises
              <Badge variant="secondary">Latest</Badge>
            </AlertTitle>
            <AlertDescription className="mt-1 flex items-center justify-between">
              Currently working as photographer on ship
            </AlertDescription>
          </Alert>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom="2"
        >
          <Alert className="my-4 shadow-md">
            <Terminal className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
              Heads up!
            </AlertTitle>
            <AlertDescription className="mt-1 flex items-center justify-between">
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom="3"
        >
          <Alert className="my-4 shadow-md">
            <Terminal className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
              Heads up!
            </AlertTitle>
            <AlertDescription className="mt-1 flex items-center justify-between">
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom="4"
        >
          <Alert className="my-4 shadow-md">
            <Terminal className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
              Heads up!
            </AlertTitle>
            <AlertDescription className="mt-1 flex items-center justify-between">
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </motion.div>
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom="5"
        >
          <Alert className="my-4 shadow-md">
            <Terminal className="h-4 w-4" />
            <AlertTitle className="flex items-center gap-x-2">
              Heads up!
            </AlertTitle>
            <AlertDescription className="mt-1 flex items-center justify-between">
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        </motion.div>
      </div>
    </div>
  );
}
