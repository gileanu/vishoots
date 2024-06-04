import FeaturedGalleries from "@/components/featured-galleries";
import { Button } from "@/components/ui/button";
import { Heading2 } from "@/components/ui/heading2";
import Image from "next/image";
import Link from "next/link";
import AboutMe from "./components/about-me";
import WorkExp from "./components/work-exp";

const MirleaImage = {
  url: "https://utfs.io/f/c7f3adea-2884-4592-a72b-a49efe0c7d1c-hrdrm6.png",
};

const FooterImage = {
  url: "https://utfs.io/f/aa32d9b7-1024-47e0-8273-adfeabe0f62c-svjnmf.jpg",
};

const Home = () => {
  return (
    <>
      <section className="flex flex-col-reverse lg:flex-row mb-10">
        <div className="sm:m-auto w-full lg:w-1/2">
          <h1 className="pt-4 scroll-m-20 text-5xl tracking-tight lg:text-7xl">
            Buna siua,
          </h1>
          <p className="pb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
            dolores animi. Saepe minus, deserunt, explicabo odit quod qui
            accusantium natus ullam libero unde provident aliquid vero adipisci
            consectetur tempora illo!
          </p>
          <div className="flex gap-2 pt-2 max-w-full sm:max-w-[450px]">
            <Button asChild size="lg" variant="default" className="w-1/2">
              <Link href="/contact">Contact</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-1/2">
              <Link href="/portfolio">View Work</Link>
            </Button>
          </div>
        </div>
        <div className="m-auto w-3/4 md:w-2/3 flex items-center justify-center">
          <Image
            src={MirleaImage.url}
            alt="Vilea Ionut"
            width="374"
            height="338"
            loading="lazy"
            quality={70}
          />
        </div>
      </section>
      <section>
        <Heading2
          title="Featured galleries"
          description="My favorite galleries"
        />
        <FeaturedGalleries />
      </section>
      <section>
        <Heading2 title="About me" description="My hobbies and other stuff" />
        <AboutMe />
      </section>
      <section>
        <Heading2
          title="Work experience"
          description="How I got to where I am right now"
        />
        <WorkExp />
      </section>
      <div className="h-screen relative">
        <Image
          src={FooterImage.url}
          fill
          quality={80}
          alt="Footer Background"
          className="object-cover"
        />
      </div>
    </>
  );
};

export default Home;
