import NavList from "./NavList";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="p-4">
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
