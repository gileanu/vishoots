"use client";

import { Button } from "@/components/ui/button";
import Mirlea from "@/public/assets/mirlea.png";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const visible = { opacity: 1, y: 0, transition: { duration: 1 } };

const HeroSection = () => {
  return (
    <section className="flex sm:h-auto flex-col-reverse md:flex-row mb-5 md:mb-20">
      <div className="sm:m-auto w-full md:w-1/2">
        <h1 className="text-4xl font-bold tracking-tight py-4">Buna siua,</h1>
        <p className="pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          dolores animi. Saepe minus, deserunt, explicabo odit quod qui
          accusantium natus ullam libero unde provident aliquid vero adipisci
          consectetur tempora illo!
        </p>
        <div className="flex gap-2">
          <Button asChild size="lg" variant="default" className="w-1/2">
            <Link href="/contact">Contact</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="w-1/2">
            <Link href="/categories">View Work</Link>
          </Button>
        </div>
      </div>
      <div className="m-auto w-3/4 md:w-2/3">
        <Image src={Mirlea} alt="Vilea Ionut" />
      </div>
    </section>
  );
};

export default HeroSection;
