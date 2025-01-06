type SkillItemProps = {
  img: string;
  skill: string;
};

const SkillItem = ({ img, skill }: SkillItemProps) => {
  return (
    <li className="px-4 py-2 center gap-2 border border-white/10 rounded-full bg-white/10 shadow backdrop-blur">
      <img className="max-h-6" src={img} alt="" />
      <p className="text-center text-xl">{skill}</p>
    </li>
  );
};

export default SkillItem;
