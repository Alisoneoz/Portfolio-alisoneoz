import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/ProjectsData";

const Projects = () => {
  return (
    <div
      id="projects"
      className="sm:mt-7 pt-6 flex flex-col  justify-center mx-auto"
    >
      <h2 className="font-bold text-4xl sm:text-5xl text-center mb-3 ">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 sm:gap-y-2 gap-y-6 rounded-xl mx-10 sm:mx-14 ">
        {projectsData.map((project, i) => (
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
