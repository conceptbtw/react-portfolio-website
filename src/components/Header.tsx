import NavList from "./NavList";
import NavItem from "./NavItem";

const Header = () => {
  return (
    <header className="">
      <NavList>
        <NavItem link="" section="About" />
        <NavItem link="" section="Skills" />
        <NavItem link="" section="Portfolio" />
        <NavItem link="" section="Experience" />
        <NavItem link="" section="Contacts" />
      </NavList>
    </header>
  );
};

export default Header;
