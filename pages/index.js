 import Works from "./components/Works/Works"; 
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
 
export default function Home() { 
  return (
    <>
      <Navbar/>
      <div className="header-border sm:hidden" />
      <Intro/>
      <div className = "body-border mt-8 mb-20 sm:hidden"/>
      <Works/>
      <div className = "body-border my-28 sm:hidden"/>
      <Skills/>
      <div className = "body-border my-28 sm:hidden"/>
      <ContactForm/>
    </>
  )   
}
