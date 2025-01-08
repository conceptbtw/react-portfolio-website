type SkillItemProps = {
  img: string;
  skill: string;
};

const SkillItem = ({ img, skill }: SkillItemProps) => {
  return (
    <li className="px-4 py-2 center gap-2 border border-primary/10 rounded-full bg-primary/10 shadow backdrop-blur">
      <img className="max-h-6" src={img} alt="Skill logo" />
      <p className="text-center text-xl">{skill}</p>
    </li>
  );
};

export default SkillItem;
