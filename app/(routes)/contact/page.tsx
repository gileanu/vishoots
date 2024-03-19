import Container from "@/components/page-container";
import MainForm from "./components/main-form";

const ContactPage = () => {
  return (
    <Container>
      <div className="h-[250px] md:h-[450px] rounded-md overflow-hidden bg-cover bg-center"></div>
      <MainForm />
    </Container>
  );
};

export default ContactPage;
