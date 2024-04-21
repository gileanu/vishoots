"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const fadeInAnimation = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 50,
    },
  }),
};

const info = [
  {
    title: "Info 1",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident!",
  },
  {
    title: "Info 2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur",
  },
  {
    title: "Info 3",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur",
  },
  {
    title: "Info 4",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur",
  },
  {
    title: "Info 5",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur",
  },
];

const AboutMe = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-5 overflow-hidden">
      {info.map((item, index) => (
        <motion.div
          variants={fadeInAnimation}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
          custom={index}
          key={item.title}
          className="overflow-hidden"
        >
          <Card className="h-full">
            <CardHeader>
              <h3 className="text-2xl">{item.title}</h3>
            </CardHeader>
            <CardContent>
              <p>{item.desc}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

export default AboutMe;
