type NavItemProps = {
  link: string;
  section: string;
};

const NavItem = ({ link, section }: NavItemProps) => {
  return (
    <li className="border-b-2 border-transparent hover:border-accent">
      <a className="" href={link}>
        {section}
      </a>
    </li>
  );
};

export default NavItem;
