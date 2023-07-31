import CMSProjectCard from "./CMSProjectCard";
import { cMSProjectsData } from "../data/CMSProjectsData";
const CMSProjects = () => {
  return (
    <div className="sm:mt-7 pt-6 flex flex-col  justify-center mx-auto">
      <h3 className="font-bold text-2xl sm:text-3xl text-center mb-3 ">
        CMS and Website builder Projects (WordPress and Squarespace)
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-6 sm:gap-y-2 gap-y-6 rounded-xl mx-10 sm:mx-14 ">
        {cMSProjectsData.map((project, i) => (
          <div key={i}>
            <CMSProjectCard
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CMSProjects;
