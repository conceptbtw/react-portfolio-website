type NavItemProps = {
  link: string;
  section: string;
};

const NavItem = ({ link, section }: NavItemProps) => {
  return (
    <li className="p-1 border-y-2 border-transparent hover:border-b-accent">
      <a className="" href={link}>
        {section}
      </a>
    </li>
  );
};

export default NavItem;
