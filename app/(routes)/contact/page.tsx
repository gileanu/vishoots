import Image from "next/image";
import contactImage from "@/public/assets/contact-opt.jpg";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import ContactForm from "./components/form";

const ContactPage = () => {
  return (
    <div className="h-full w-screen flex">
      <div className="h-full w-full lg:w-1/2 flex items-center justify-center relative">
        <Image
          src={contactImage}
          alt="Background image"
          quality={100}
          priority
          fill
          style={{
            objectFit: "cover",
          }}
          className="z-0 lg:hidden dark:opacity-50"
        ></Image>
        <ContactForm />
      </div>
      <div className="h-full w-1/2 relative hidden lg:block">
        <Image
          src={contactImage}
          priority
          fill
          placeholder="blur"
          alt="Background Image"
          quality={100}
          style={{
            objectFit: "cover",
          }}
        ></Image>
      </div>
    </div>
  );
};

export default ContactPage;
