import NavList from "./NavList";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="w-full sticky top-0 p-4 center border-b border-primary/10 bg-primary/10 shadow backdrop-blur z-50">
      <NavList>
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
