import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Mirlea from "@/public/assets/mirlea.png";
import Link from "next/link";

export const HeroMobile = () => {
  const heroText = "Hello everyone,".split(" ");
  const heroDesc =
    "I'm Ionut, a certified photographer with 7+ years' experience in portrait and event photography, and 2+ years in videography. My passion is creating unforgettable memories through visual storytelling. Continuously expanding my skills and seeking new opportunities for growth and creativity.".split(
      " "
    );
  return (
    <div className="h-max flex flex-col-reverse lg:hidden justify-center items-center pb-5">
      <div className="w-full pb-5">
        <div className="pb-2">
          {heroText.map((el, i) => (
            <motion.span
              className="text-3xl font-bold"
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
              className="text-sm"
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
        <div className="w-full items-center flex pt-5 sm:flex">
          <Button
            asChild
            variant="default"
            size="lg"
            className="mr-2 w-1/2 sm:w-1/4"
          >
            <Link href="/contact">Contact</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-1/2 sm:w-1/4"
          >
            <Link href="/gallery">Gallery</Link>
          </Button>
        </div>
      </div>
      <div className="w-3/4 pb-5">
        <Image src={Mirlea} alt="Ionut Vilea" />
      </div>
    </div>
  );
};
