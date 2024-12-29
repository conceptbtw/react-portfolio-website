type NavItemProps = {
  link: string;
  section: string;
};

const NavItem = ({ link, section }: NavItemProps) => {
  return (
    <li className="">
      <a className="" href={link}>
        {section}
      </a>
    </li>
  );
};

export default NavItem;
