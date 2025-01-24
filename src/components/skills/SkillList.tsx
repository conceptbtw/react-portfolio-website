import { ReactNode } from "react";

type SkillListProps = {
  children: ReactNode;
};

const SkillList = ({ children }: SkillListProps) => {
  return <ul className="w-full center flex-wrap gap-4 md:gap-5">{children}</ul>;
};

export default SkillList;
