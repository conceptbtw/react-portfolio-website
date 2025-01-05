import { ReactNode } from "react";

type NavListProps = {
  children: ReactNode;
};

const NavList = ({ children }: NavListProps) => {
  return (
    <nav className="max-w-screen-lg text-2xl font-bold">
      <ul className="flex justify-center items-center gap-8">{children}</ul>
    </nav>
  );
};

export default NavList;
