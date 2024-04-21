import { Heading1 } from "@/components/ui/heading1";
import { ContactForm } from "./components/main-form";

export const revalidate = 0;

const ContactPage = () => {
  return (
    <>
      <div className="h-screen">
        <Heading1 title="Contact me" description="Let me know what's up" />
        <div className="flex">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
