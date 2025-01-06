import { ReactNode } from "react";

type ProjectListProps = {
  children: ReactNode;
};

const ProjectList = ({ children }: ProjectListProps) => {
  return <ul className="flex flex-col gap-4">{children}</ul>;
};

export default ProjectList;
