import { ReactNode } from "react";

type ExperienceListProps = {
  children: ReactNode;
};

const ExperienceList = ({ children }: ExperienceListProps) => {
  return <ul className="flex flex-col gap-4 md:gap-5">{children}</ul>;
};

export default ExperienceList;
