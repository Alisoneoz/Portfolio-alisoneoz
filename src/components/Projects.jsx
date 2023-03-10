import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import interactiveCalculator from "../assets/interactive-calculator.png";
import todoAppDark from "../assets/todoAppDark.png";
import todoApp from "../assets/todoApp.png"
import ProjectCard from "./ProjectCard";


const Projects = () => {

  return (
    <div id="projects" className="sm:mt-7 pt-6 flex flex-col  justify-center mx-auto">
      <h2 className="font-bold text-4xl sm:text-5xl text-center mb-3 ">
        Projects
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 sm:gap-y-2 gap-y-6 rounded-xl mx-10 sm:mx-14 ">
        <ProjectCard
          title="E-commerce Clothing Store"
          description="E-commerce website created with the MERN stack, Redux Toolkit, Firebase for user authentication, and the Stripe library to handle payments."
          image={interactiveCalculator}
          link=""
          repoLink=""
        />
        <ProjectCard
          title="To-Do App with User Authentication"
          description="Built with the MERN stack, this app allows users to access their accounts and create, edit, show, and delete their tasks entered into the app."
          image={todoAppDark }
          link="https://todo-mern-app-alisoneoz.netlify.app/"
          repoLink="https://github.com/Alisoneoz/Frontend-MERN-Todo-app"
        />
        <ProjectCard
          title="Interactive Calculator"
          description="This app is built with ReactJS and the MathJS library to execute the arithmetical operations in the calculator."
          image={interactiveCalculator}
          link="https://interactive-calculator-reactjs.netlify.app/"
          repoLink="https://github.com/Alisoneoz/interactive-calculator-reactjs"
        />
      </div>
    </div>
  );
};

export default Projects;
