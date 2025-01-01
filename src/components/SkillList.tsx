import { ReactNode } from "react";

type SkillListProps = {
  children: ReactNode;
};

const SkillList = ({ children }: SkillListProps) => {
  return <ul className="flex flex-col gap-1">{children}</ul>;
};

export default SkillList;
