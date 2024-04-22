import { Heading1 } from "@/components/ui/heading1";
import { ContactForm } from "./components/main-form";
import { Separator } from "@/components/ui/separator";

export const revalidate = 0;

const ContactPage = () => {
  return (
    <>
      <div className="h-screen">
        <Heading1 title="Contact me" description="Let me know what's up" />
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/2 flex flex-col gap-2">
            <ContactForm />
          </div>
          <Separator
            orientation="vertical"
            className="hidden md:block h-auto"
          />
          <Separator orientation="horizontal" className="md:hidden" />
          <div className="w-full md:w-1/2 flex flex-col gap-2"></div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
