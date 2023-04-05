import { FaGithub, FaLink } from "react-icons/fa";
const ProjectCard = ({ image, title, description, link, repoLink }) => {
  return (
    <div className="p-3 pb-2 bg-stone-100 rounded-lg h-full mx-auto  w-full shadow-2xl dark:bg-zinc-200/40">
      <img src={image} className="rounded-md border-none mb-3 w-11/12 mx-auto" />

      <h2 className="text-lg sm:text-xl font-bold text-center mt-2 mb-1">
        {title}
      </h2>
      <hr />

      <div className="mt-2 mx-2">
        <div>{description}</div>
        <a href={link} target="_blank" className="flex justify-center items-center mt-2 mb-2 text text-base font-bold">
          <FaLink className="mr-2" /> <p className="mt-1">Project Link</p>
        </a>
        <a href={repoLink} target="_blank" className="flex justify-center items-center mb-1 text-base font-bold ">
          <FaGithub className="mr-2" /> <p className="mt-1">GitHub Repository</p>
        </a>
      </div>

    </div>
  );
};

export default ProjectCard;
