import SkillsCard from "./SkillsCard";

const Skills = () => {
  const skills = [
    {
      image: "skillsImages/reactjs.png",
    },
    {
      image: "skillsImages/tailwind.png",
    },
    {
      image: "skillsImages/redux.png",
    },
    {
      image: "skillsImages/nodejs.png",
    },
    {
      image: "skillsImages/express.png",
    },

    {
      image: "skillsImages/mongodb.png",
    },
    {
      image: "skillsImages/html.png",
    },
    {
      image: "skillsImages/css.png",
    },
    {
      image: "skillsImages/javascript.png",
    },
    {
      image: "skillsImages/javascript.png",
    },
    {
      image: "skillsImages/javascript.png",
    },
    {
      image: "skillsImages/javascript.png",
    },
  ];
  return (
    <div className="pt-10 pb-32 ">
      <h2 className="text-center text-4xl sm:text-5xl font-bold pb-10">
        Top Skills
      </h2>

      <div className="grid grid-cols-3 gap-4 rounded-xl mx-10 sm:mx-14 ">
        {skills.map((skill, i) => (
          <div key={i}>
            <SkillsCard image={skill.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
