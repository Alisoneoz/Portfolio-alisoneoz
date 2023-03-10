import ali from "../assets/ali.jpg";
import {
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsFillEnvelopeFill,
} from "react-icons/bs";
const HeroSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col sm:flex-row items-center sm:my-7 pt-28 sm:pt-32 pb-20 sm:mx-auto"
    >
      <img
        src={ali}
        alt="Alison Estephany Software Developer"
        className="rounded-md w-2/3 sm:w-1/3 sm:ml-20"
      />
      <div className=" ml-10 mr-7 mt-6 sm:mt-0 sm:ml-8">
        <p className="text-2xl sm:text-2xl mb-2 sm:mb-5">Hello! My name is</p>
        <p className="font-bold text-4xl sm:text-7xl sm:mb-6">Alison Estephany </p>
        <div className="my-3 flex text-2xl sm:text-5xl">
          A
          <p className="text-fuchsia-600 dark:text-pink-200 px-1 sm:px-2 font-bold">
            Fullstack Developer
          </p>
          and
          <p className="text-violet-700 dark:text-rose-300 pl-1 sm:pl-2 font-bold">
            Dietitian
          </p>
          .
        </div>

        <div className="sm:text-2xl sm:mt-6">
          <p className="sm:mb-2">I'm passionate about Software Development,</p>
          <p>
            and I'm skilled in ReactJS, TailwindCSS, NodeJS, ExpressJS and
            MongoDB.
          </p>
        </div>
        <div className="flex ml-3 mt-5 sm:mt-6 text-5xl sm:text-4xl items-center">
        
          <a href="#contact" className="py-2 px-4 sm:px-5 sm:py-3 mr-2 sm:mr-4 text-lg sm:text-xl text-stone-100 font-bold bg-fuchsia-700 rounded-3xl dark:bg-fuchsia-400 dark:text-[#310E46]">Contact Me</a>
       
          <a
            href="https://github.com/Alisoneoz"
            target="_blank"
            className="mx-2 sm:mx-4"
          >
            <BsGithub />
          </a>
          <a
            href="https://www.instagram.com/alisonestephany/"
            target="_blank"
            className="mx-2 sm:mx-4"
          >
            <BsInstagram />
          </a>
          <a
            href="https://twitter.com/AlisonEstephany"
            target="_blank"
            className="mx-2 sm:mx-4"
          >
            <BsTwitter />
          </a>
          <a href="mailto:alisonestephanyoz@gmail.com" className="mx-2 sm:mx-4">
            <BsFillEnvelopeFill />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
