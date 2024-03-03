"use client";

import Container from "@/components/page-container";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heading1 } from "@/components/ui/heading1";
import Mirlea from "@/public/assets/mirlea.png";
import FooterBG from "@/public/assets/footer-image.jpg";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { HeroMobile } from "./components/mobile-herosec";
import { Aperture, BookOpen, Crop, GraduationCap } from "lucide-react";
import NoResults from "@/components/ui/s-no-results";
import Link from "next/link";

export default function Home() {
  const heroText = "Hello everyone,".split(" ");
  const heroDesc =
    "I'm Ionut, a certified photographer with 7+ years' experience in portrait and event photography, and 2+ years in videography. My passion is creating unforgettable memories through visual storytelling. Continuously expanding my skills and seeking new opportunities for growth and creativity.".split(
      " "
    );
  return (
    <main>
      <Container>
        <div className="h-dvh hidden lg:flex justify-center items-center">
          <div className="w-1/2">
            <div className="pb-2">
              {heroText.map((el, i) => (
                <motion.span
                  className="text-5xl font-bold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 10,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
            <div>
              {heroDesc.map((el, i) => (
                <motion.span
                  className="lg:text-lg md:text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 0.25,
                    delay: i / 20,
                  }}
                  key={i}
                >
                  {el}{" "}
                </motion.span>
              ))}
            </div>
            <div className="w-full pt-3 justify-center items-center">
              <Button
                asChild
                variant="default"
                size="lg"
                className="mr-2 w-1/3"
              >
                <Link href="/contact">Contact</Link>
              </Button>
              <Button asChild variant="secondary" size="lg" className="w-1/3">
                <Link href="/gallery">Gallery</Link>
              </Button>
            </div>
          </div>
          <div className="lg:w-3/4 md:w-1/2">
            <Image src={Mirlea} alt="Ionut Vilea" />
          </div>
        </div>
        <HeroMobile />
        <div>
          <Heading1
            title="Featured Galleries"
            description="View my recent work"
          />
          <Separator />
          <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mb-5">
            <NoResults />
          </div>
        </div>
        <div>
          <Heading1
            title="Skills"
            description="How I got to where I am right now"
          />
          <Separator />
          <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mb-10">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight row-span-1 flex text-muted-foreground">
                <BookOpen size={30} className="mr-2"></BookOpen>Abilities
              </h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit natus, placeat officia blanditiis nam aliquam
                  explicabo modi rerum libero velit nisi eius eveniet, rem
                  incidunt dicta quia perferendis cumque debitis!
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight row-span-1 flex text-muted-foreground">
                <Crop size={30} className="mr-2"></Crop>Applications
              </h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit natus, placeat officia blanditiis nam aliquam
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight row-span-1 flex text-muted-foreground">
                <Aperture size={30} className="mr-2"></Aperture>Gear
              </h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit natus, placeat officia blanditiis nam aliquam
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <Heading1
            title="Education"
            description="Latest educational attainment"
          />
          <Separator />
          <div className="grid gap-5 lg:grid-cols-3 sm:grid-cols-2 mb-10">
            <div>
              <h2 className="text-xl lg:text-2xl font-bold tracking-tight row-span-1 flex text-muted-foreground">
                <GraduationCap size={30} className="mr-2"></GraduationCap>
                University
              </h2>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Suscipit natus, placeat officia blanditiis nam aliquam
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
      <div className="flex justify-center items-center">
        <Image src={FooterBG} alt="Footer Image" className="object-cover" />
      </div>
    </main>
  );
}
