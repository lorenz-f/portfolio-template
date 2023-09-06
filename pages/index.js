import Works from "../components/Works/Works";
import Skills from "../components/Skills";
import ContactForm from "../components/ContactForm";
import Navbar from "../components/Navbar";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="header-border sm:hidden" />
      <Intro />
      <div className="body-border mt-10 sm:hidden" />
      <Works />
      <div className="body-border mt-28 mb-20 sm:hidden" />
      <Skills />
      <div className="body-border mt-28 mb-20 sm:hidden" />
      <ContactForm />
    </>
  );
}
