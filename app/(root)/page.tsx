import getGalleries from "@/actions/get-galleries";
import Container from "@/components/page-container";
import { Heading1 } from "@/components/ui/heading1";
import { Separator } from "@/components/ui/separator";
import HeroSection from "./components/hero-section";
import GalleryListHome from "@/components/gallery-list-home";
import AboutSection from "./components/about-me";
import HomeFooter from "./components/home-footer";
import FooterImage from "@/public/assets/footer-image.jpg";
import { WorkTimeline } from "./components/work-timeline";

export const revalidate = 0;

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
        <Heading1
          title="Learn more about me"
          description="Learn more about me"
        />
        <Separator />
        <AboutSection />
        <Heading1
          title="Check out my work experience"
          description="Work experiences"
        />
        <Separator />
        <WorkTimeline />
      </Container>
      <HomeFooter image={FooterImage} />
    </main>
  );
};

export default Home;
