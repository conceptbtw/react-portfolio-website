import { ReactNode } from "react";

type SkillListProps = {
  children: ReactNode;
};

const SkillList = ({ children }: SkillListProps) => {
  return <ul className="flex flex-col gap-2">{children}</ul>;
};

export default SkillList;
