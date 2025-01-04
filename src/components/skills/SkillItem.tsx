type SkillItemProps = {
  img: string;
  skill: string;
};

const SkillItem = ({ img, skill }: SkillItemProps) => {
  return (
    <li className="p-2 flex justify-center items-center gap-2 border border-white/10 rounded-full">
      <img className="max-h-6" src={img} alt="" />
      <p className="text-center">{skill}</p>
    </li>
  );
};

export default SkillItem;
