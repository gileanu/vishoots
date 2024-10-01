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
    title: "Love for photography",
    desc: "My love for photography blossomed in 2012 when I received my first DSLR. What began as a simple curiosity quickly transformed into a passionate pursuit. Through countless hours of shooting and exploring, I discovered not just a hobby, but a profound joy in capturing the world around me.Photography has become my way of telling stories, freezing moments in time, and celebrating the beauty in everyday life.",
  },
  {
    title: "Car Culture",
    desc: "My passion for cars and photography has opened the door to many incredible connections and friendships. By attending various car events, I've had the privilege of meeting fellow enthusiasts who share my love for both photography and automobiles. These gatherings have not only allowed me to capture stunning images of unique vehicles but also to bond with others who appreciate the artistry and craftsmanship behind each car. Each event is a celebration of creativity and community, and I cherish the stories and experiences we share along the way.",
  },
  {
    title: "Hiking",
    desc: "When I&apos;m not behind the camera, you can find me hiking in the great outdoors. I enjoy exploring new trails and immersing myself in nature's beauty. Hiking not only rejuvenates my spirit but also inspires my creativity, providing a perfect balance to my life.",
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
