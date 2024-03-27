import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface HomeFooterProps {
  image: string | StaticImport;
}

const HomeFooter: React.FC<HomeFooterProps> = ({ image }) => {
  return (
    <section className="flex justify-center h-full w-full">
      <Image src={image} alt="Footer Image" width="1920" height="1080" />
    </section>
  );
};

export default HomeFooter;
