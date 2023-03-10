import { useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { MdSunny } from "react-icons/md";

const NavBar = () => {
  const [theme, setTheme] = useState(null);

  // theme switch logic
  const userTheme = localStorage.getItem("theme");
  useEffect(() => {
    if (
      userTheme === "dark" ||
      window.matchMedia("(prefers-color-scheme:dark)").matches
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log(theme)
  };


  return (
    <nav className="flex scroll-smooth justify-end text-xl pt-5 pb-3 pr-6 shadow-lg rounded-xl font-bold w-full fixed top-0 left-0 right-0 
    
    bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-stone-200 via-stone-100 to-purple-300

    dark:bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))]
    dark:from-[#310E46] dark:via-purple-900 dark:to-pink-600
    ">
      <div className="mx-7">
        <a href="#about">About</a>
      </div>
      <div className="mx-7">
        <a href="#projects">Projects</a>
      </div>
      <div className="mx-7">
        <a href="#contact">Contact</a>
      </div>
      <button onClick={handleThemeSwitch} className="mx-7">
        {theme === "dark" ? <MdSunny /> : <BsFillMoonStarsFill />}
      </button>
    </nav>
  );
};

export default NavBar;
