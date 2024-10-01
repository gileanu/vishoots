"use client";

import { type CarouselApi } from "@/components/ui/carousel";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Heading2 } from "@/components/ui/heading2";

// TODO: fix this beginer lookig ahh code (i have 2 months of nextjs experience)

const firstSlider = [
  {
    url: "https://utfs.io/f/651c7de6-be40-4f37-90c1-426fdfd419d7-1va3ju.jpg",
  },
  {
    url: "https://utfs.io/f/70433877-f88c-434a-b88c-277a1921baaf-1va3jv.jpg",
  },
];

const secondSlider = [
  {
    url: "https://utfs.io/f/bb170136-fff2-478f-86ea-7d9c2308f3e9-n9aeel.jpg",
  },
  {
    url: "https://utfs.io/f/608a86ef-fe88-4e77-9d99-47d90d4bfb70-n9aeek.jpg",
  },
];

const thirdSlider = [
  {
    url: "https://utfs.io/f/e66b183a-eff5-43a6-a2af-45c3e0e87dc3-1rm7nb.jpg",
  },
  {
    url: "https://utfs.io/f/dbc8ed74-3ab8-44d9-9cee-38ddde620045-1rm7nc.jpg",
  },
  {
    url: "https://utfs.io/f/641c07b5-4e0d-450e-a25c-bbadd9d4d421-1rm7nd.jpg",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col gap-8 border">
      <div className="flex flex-col gap-10 sm:flex-row p-5">
        <div className="w-full md:w-1/2 pr-6">
          <Heading2 title="Events" description="Cool events" />
          <p>
            Capture the magic of your special moments with my professional event
            photography services. Whether it&apos;s a wedding, corporate
            gathering, birthday celebration, or any other milestone, I am
            dedicated to documenting every detail and emotion of your event
            Let&apos;s create lasting memories together!work closely with
            clients to understand their vision and provide a personalised
            experience, delivering stunning images that you&apos;ll cherish for
            years to come.
          </p>
        </div>
        <Carousel className="w-full md:w-1/2 max-w-xl">
          <CarouselContent className="">
            {firstSlider.map((image) => (
              <CarouselItem
                key={image.url}
                className="flex h-96 w-full items-center justify-center p-6 relative"
              >
                <Image
                  src={image.url}
                  alt="Slider"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-col-reverse gap-10 sm:flex-row bg-foreground/5 p-5">
        <Carousel className="w-full md:w-1/2 max-w-xl">
          <CarouselContent className="">
            {thirdSlider.map((image) => (
              <CarouselItem
                key={image.url}
                className="flex h-96 w-full items-center justify-center p-6 relative"
              >
                <Image
                  src={image.url}
                  alt="Slider"
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="w-full md:w-1/2 pr-6">
          <Heading2 title="Portrait" description="Cool looking people" />
          <p>
            Elevate your personal or professional image with my portrait
            photography services. Whether you're looking for a timeless family
            portrait, a stunning headshot, or a creative individual session, I
            strive to capture the unique essence of each subject. My approach to
            portrait photography is all about connection and authenticity. I
            create a comfortable and relaxed environment, allowing you to
            express yourself naturally. By focusing on the details that make
            you, you—be it your smile, your style, or your story—I aim to
            deliver striking images that resonate with your personality and
            vision.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-10 sm:flex-row p-5">
        <div className="w-full md:w-1/2 pr-6">
          <Heading2 title="Automotive" description="Cool looking cars" />
          <p>
            Welcome to my Automotive Photography services, where the passion for
            cars meets artistic expression. Whether you&apos;re a car
            enthusiast, a dealership, or a brand looking to showcase your
            vehicles, I&apos;m here to help you capture the beauty and power of
            your automotive assets. Let&apos;s collaborate to create captivating
            images that resonate with car lovers and elevate your brand&apos;s
            presence!
          </p>
        </div>
        <Carousel className="w-full md:w-1/2 max-w-xl">
          <CarouselContent className="">
            {secondSlider.map((image) => (
              <CarouselItem
                key={image.url}
                className="flex h-96 w-full items-center justify-center p-6 relative"
              >
                <Image
                  src={image.url}
                  alt="Slider"
                  fill
                  className="object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Services;
