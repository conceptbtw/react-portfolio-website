type SocialItemProps = {
  link: string;
  img: string;
};

const SocialItem = ({ link, img }: SocialItemProps) => {
  return (
    <li className="size-12 hover:mx-1 center border hover:border-transparent border-primary/10 hover:outline outline-2 outline-accent rounded-full bg-primary/10 shadow backdrop-blur hover:scale-110 transition-all">
      <a href={link} target="_blank">
        <img className="p-2" src={img} alt="Social logo" />
      </a>
    </li>
  );
};

export default SocialItem;
