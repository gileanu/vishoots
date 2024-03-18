"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { Book } from "lucide-react";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const AboutSection = () => {
  return (
    <div className="grid px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-14 overflow-hidden">
      <motion.div
        variants={fadeInAnimation}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        custom="1"
      >
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-initial gap-2">
              <Book /> Exp 1
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              accusamus tempore cumque repellat est neque, ratione laboriosam
              esse itaque qui, adipisci saepe repudiandae dicta, at dolores
              repellendus ad soluta quaerat.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-initial gap-2">
              <Book /> Exp 1
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              accusamus tempore cumque repellat est neque, ratione laboriosam
              esse itaque qui, adipisci saepe repudiandae dicta, at dolores
              repellendus ad soluta quaerat.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
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
        <Card>
          <CardHeader>
            <CardTitle className="flex flex-initial gap-2">
              <Book /> Exp 1
            </CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="px-6">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              accusamus tempore cumque repellat est neque, ratione laboriosam
              esse itaque qui, adipisci saepe repudiandae dicta, at dolores
              repellendus ad soluta quaerat.
            </p>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default AboutSection;
