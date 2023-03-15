import ProjectCard from "./ProjectCard";


const Projects = () => {
  const projects = [
    {
      title: "To-Do App with User Authentication",
      description:
        "Built with the MERN stack, this app allows users to access their accounts and create, edit, show, and delete their tasks entered into the app.",
      image: "projectImages/todoAppDark.png",
      link: "https://todo-mern-app-alisoneoz.netlify.app/",
      repoLink: "https://github.com/Alisoneoz/todo-mern-app",
    },
    {
      title: "E-commerce Clothing Store",
      description:
        "E-commerce website created with the MERN stack, Redux Toolkit, Firebase for user authentication, and Stripe Checkout to handle payments.",
      image: "projectImages/dragonEcommerce.png",
      link: "https://dragon-ecommerce-store.netlify.app/",
      repoLink: "https://github.com/Alisoneoz/Dragon-ecommerce",
    },
    {
      title: "Interactive Calculator",
      description:
        "This app is built with ReactJS and the MathJS library to execute the arithmetical operations in the calculator.",
      image: "projectImages/interactive-calculator.png",
      link: "https://interactive-calculator-reactjs.netlify.app/",
      repoLink: "https://github.com/Alisoneoz/interactive-calculator-reactjs",
    },
  ];
  
  return (
    <div
      id="projects"
      className="sm:mt-7 pt-6 flex flex-col  justify-center mx-auto"
    >
      <h2 className="font-bold text-4xl sm:text-5xl text-center mb-3 ">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 sm:gap-y-2 gap-y-6 rounded-xl mx-10 sm:mx-14 ">
        {projects.map((project, i) => (
          <div key={i}>
            <ProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              repoLink={project.repoLink}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
