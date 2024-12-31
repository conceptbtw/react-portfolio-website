import { ReactNode } from "react";

type NavListProps = {
  children: ReactNode;
};

const NavList = ({ children }: NavListProps) => {
  return (
    <nav className="">
      <ul className="flex justify-center items-center gap-4">{children}</ul>
    </nav>
  );
};

export default NavList;
