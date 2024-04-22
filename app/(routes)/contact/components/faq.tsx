"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const info = [
  {
    title: "How much does it cost?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident!",
  },
  {
    title: "How will I receive the images?",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur quibusdam molestiae illum quidem id quae, reiciendis quod est quo necessitatibus non aliquam deserunt totam perspiciatis hic quis provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae delectus consequatur",
  },
];

const FAQ = () => {
  return (
    <div className="flex flex-col gap-4 border p-4 rounded-md">
      <h2 className="text-2xl lg:text-3xl font-sans">
        Frequently asked questions:
      </h2>
      {info.map((item, index) => (
        <Accordion key={index} type="single" collapsible>
          <AccordionItem value={index.toString()}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.desc}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};

export default FAQ;
