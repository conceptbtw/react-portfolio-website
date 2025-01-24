import NavList from "./NavList";
import NavItem from "./NavItem";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 p-4 md:p-5 center flex-col gap-8 md:gap-10 border-b border-primary/10 md:text-2xl font-bold bg-primary/10 shadow backdrop-blur z-50">
      <div className="w-full md:hidden center">
        <button className="p-1 border-y-2 border-transparent hover:border-b-accent" onClick={toggleMenu} aria-label="Toggle Menu">
          Menu
        </button>
      </div>
      <NavList isMenuOpen={isMenuOpen}>
        <NavItem link="#about" section="About" />
        <NavItem link="#skills" section="Skills" />
        <NavItem link="#portfolio" section="Portfolio" />
        <NavItem link="#experience" section="Experience" />
        <NavItem link="#contacts" section="Contacts" />
      </NavList>
    </header>
  );
};

export default Header;
