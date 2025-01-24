import { ReactNode } from "react";

type NavListProps = {
  isMenuOpen: boolean;
  children: ReactNode;
};

const NavList = ({ isMenuOpen, children }: NavListProps) => {
  return (
    <nav className={`max-w-screen-lg ${isMenuOpen ? "block" : "hidden"} md:block`}>
      <ul className="center flex-col md:flex-row gap-8 md:gap-10">{children}</ul>
    </nav>
  );
};

export default NavList;
