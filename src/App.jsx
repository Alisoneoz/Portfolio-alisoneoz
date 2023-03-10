import ContactSection from "./components/ContactSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  
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
        <Projects id="projects"/>
        <ContactSection id="contact"/>
        <Footer />   
      
    </div>
  );
}

export default App;
