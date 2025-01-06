import { ReactNode } from "react";

type SkillListProps = {
  children: ReactNode;
};

const SkillList = ({ children }: SkillListProps) => {
  return <ul className="w-full flex flex-col gap-4">{children}</ul>;
};

export default SkillList;
