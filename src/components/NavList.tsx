import { ReactNode } from "react";

type NavListProps = {
  children: ReactNode;
};

const NavList = ({ children }: NavListProps) => {
  return (
    <nav className="">
      <ul className="">{children}</ul>
    </nav>
  );
};

export default NavList;
