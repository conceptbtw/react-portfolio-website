import { ReactNode } from "react";

type StackListProps = {
  children: ReactNode;
};

const StackList = ({ children }: StackListProps) => {
  return (
    <ul className="flex flex-wrap justify-center items-center gap-2">
      {children}
    </ul>
  );
};

export default StackList;
