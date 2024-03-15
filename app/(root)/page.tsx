import getGalleries from "@/actions/get-galleries";
import Container from "@/components/page-container";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import HeroSection from "./components/hero-section";
import GalleryListHome from "@/components/gallery-list-home";
import AboutSection from "./components/about-me";

const Home = async () => {
  const galleries = await getGalleries({ isFeatured: true });
  return (
    <main>
      <Container>
        <HeroSection />
        <Heading1
          title="View featured Galleries"
          description="My favorite galleries"
        />
        <Separator />
        <GalleryListHome items={galleries} />
        <Heading1 title="About me" description="Learn more about me" />
        <AboutSection />
        <Separator />
      </Container>
    </main>
  );
};

export default Home;
