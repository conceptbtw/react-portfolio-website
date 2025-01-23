import NavList from "./NavList";
import NavItem from "./NavItem";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full sticky top-0 p-4 center flex-col gap-8 border-b border-primary/10 text-2xl font-bold bg-primary/10 shadow backdrop-blur z-50">
      <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle Menu">
        Menu
      </button>
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
