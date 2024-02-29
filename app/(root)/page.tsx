import Container from "@/components/page-container";
import { Button } from "@/components/ui/button";
import { Heading1 } from "@/components/ui/heading1";
import Image from "next/image";
import Mirlea from "@/public/assets/mirlea.png";

export default function Home() {
  return (
    <main>
      <Container>
        <div className="h-dvh flex justify-center items-center">
          <div className="flex-row w-1/2">
            <Heading1
              title="Hello everyone"
              description="I'm Ionut, a certified photographer with 7+ years' experience in portrait and event photography, and 2+ years in videography. My passion is creating unforgettable memories through visual storytelling. Continuously expanding my skills and seeking new opportunities for growth and creativity."
            />
            <div className="w-full pt-5">
              <Button variant="default" className="p-5 mr-2">
                Gallery
              </Button>
              <Button variant="outline" className="p-5">
                Contact
              </Button>
            </div>
          </div>
          <div className="w-3/4">
            <Image src={Mirlea} alt="Ionut Vilea" />
          </div>
        </div>
        <div>
          <Heading1
            title="Featured Gallerys"
            description="View my recent work"
          />
        </div>
      </Container>
    </main>
  );
}
