import { ReactNode } from "react";

type StackListProps = {
  children: ReactNode;
};

const StackList = ({ children }: StackListProps) => {
  return <ul className="flex justify-center items-center gap-1">{children}</ul>;
};

export default StackList;
