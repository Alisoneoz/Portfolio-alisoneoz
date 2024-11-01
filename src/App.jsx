import { useEffect, useState } from "react";
import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import CMSProjects from "./components/CMSProjects";
import ModalNewPortfolio from "./components/ModalNewPortfolio";

function App() {
  const [openModal, setOpenModal] = useState(false);


  useEffect(()=>{
    const timer = setTimeout(()=>setOpenModal(true), 1000)
    return () => clearTimeout(timer);
  }, [])
  
  return (
    <div className="App m-0 p-0 box-border min-h-screen font-josefin flex flex-col 
    
    bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] 

     from-stone-200 via-stone-100 to-pink-200 
    dark:text-stone-200
     dark:bg-gradient-to-br 
     
     dark:from-[#310E46] dark:via-purple-900 dark:to-pink-700
     ">
    
        <NavBar />   
        <HeroSection />  
        {openModal && <ModalNewPortfolio closeModal={setOpenModal}/>}
        <Skills />
        <Projects id="projects"/>
        <CMSProjects />
        <ContactSection id="contact"/>
        <Footer />   
      
    </div>
  );
}

export default App;
