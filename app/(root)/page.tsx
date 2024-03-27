import getGalleries from "@/actions/get-galleries";
import Container from "@/components/page-container";
import { Separator } from "@/components/ui/separator";
import HeroSection from "./components/hero-section";
import GalleryListHome from "@/components/gallery-list-home";
import AboutSection from "./components/about-me";
import HomeFooter from "./components/home-footer";
import FooterImage from "@/public/assets/footer-image.jpg";
import { WorkTimeline } from "./components/work-timeline";
import { Heading2 } from "@/components/ui/heading2";

export const revalidate = 0;

const Home = async () => {
  const galleries = await getGalleries({ isFeatured: true });
  return (
    <main>
      <Container>
        <HeroSection />
        <section>
          <Heading2
            title="View featured Galleries"
            description="My favorite galleries"
          />
          <Separator />
          <GalleryListHome items={galleries} />
        </section>
        <section>
          <Heading2
            title="Learn more about me"
            description="Learn more about me"
          />
          <Separator />
          <AboutSection />
        </section>
        <section>
          <Heading2
            title="Check out my work experience"
            description="Work experiences"
          />
          <Separator />
          <WorkTimeline />
        </section>
      </Container>
      <HomeFooter image={FooterImage} />
    </main>
  );
};

export default Home;
