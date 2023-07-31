const SkillsCard = ({ image }) => {
  return (
    <div>
      <div className="bg-stone-100 rounded-lg mx-auto shadow-2xl dark:bg-zinc-200/90
      py-3  
      ">
        <img
          src={image}
          className="rounded-md border-none w-20 sm:w-24 sm:py-3 my-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default SkillsCard;
