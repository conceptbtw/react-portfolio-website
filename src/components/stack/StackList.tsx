import { ReactNode } from "react";

type StackListProps = {
  children: ReactNode;
};

const StackList = ({ children }: StackListProps) => {
  return <ul className="center flex-wrap gap-2">{children}</ul>;
};

export default StackList;
