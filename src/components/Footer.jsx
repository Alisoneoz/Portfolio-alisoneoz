import { BsGithub, BsInstagram, BsFillEnvelopeFill } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="sm:mt-2 sm:mb-7" id="footer">
      <div className="flex justify-center mb-4 text-3xl">
        <a 
         href="https://github.com/Alisoneoz" 
         target="_blank" 
         className="mx-4"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.instagram.com/alisonestephany/"
          target="_blank"
          className="mx-4"
        >
          <BsInstagram />
        </a>
        <a
          href="https://twitter.com/AlisonEstephany"
          target="_blank"
          className="mx-4"
        >
          <FaXTwitter />
        </a>
        <a
          href="mailto:alisonestephanyoz@gmail.com"
          className="mx-4"
        >
          <BsFillEnvelopeFill />
        </a>
      </div>
      <div className="text-center text-lg sm:text-xl pt-1 pb-16 sm:py-2">Alison Estephany ©2023</div>
    </footer>
  );
};

export default Footer;
