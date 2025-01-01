type SkillItemProps = {
  skill: string;
};

const SkillItem = ({ skill }: SkillItemProps) => {
  return (
    <li className="flex justify-center items-center p-1 border rounded-full">
      <p className="">{skill}</p>
    </li>
  );
};

export default SkillItem;
