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
    title: "Cruise Ship Photographer",
    desc: "As a cruise ship photographer, I had the incredible opportunity to capture the beauty and excitement of life at sea. My role involved working in a dynamic environment, where I photographed guests during various events, excursions, and candid moments on board. Each day brought new challenges and experiences, from formal dinners to adventurous shore excursions, allowing me to showcase the joy and adventure of cruising. working on a cruise ship also enriched my own travel experiences, as I explored various ports of call and cultures around the world. This role deepened my passion for photography and solidified my commitment to creating lasting memories for others.",
  },
  {
    title: "Freelance Photographer",
    desc: "As a freelance photographer, I have the flexibility and creativity to explore a wide range of subjects and styles. This role has allowed me to work with diverse clients, capturing everything from intimate portraits to vibrant events. Each project presents a unique opportunity to collaborate and bring a client&apos;s vision to life. In my freelance work, I prioritise understanding my clients&apos; needs and crafting a comfortable atmosphere that encourages authentic moments. Whether I&apos;m shooting a wedding, a family gathering, or a corporate event, I focus on telling their story through my lens. This adaptability has helped me develop a keen eye for detail and an ability to anticipate and capture special moments as they unfold.",
  },
];

const WorkExp = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-5 overflow-hidden">
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
        >
          <Card key={item.title}>
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

export default WorkExp;
