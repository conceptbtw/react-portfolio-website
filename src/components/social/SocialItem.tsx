type SocialItemProps = {
  link: string;
  img: string;
};

const SocialItem = ({ link, img }: SocialItemProps) => {
  return (
    <li className="size-12 center border border-white/10 outline-2 outline-accent rounded-full bg-white/10 shadow backdrop-blur hover:border-0 hover:outline hover:scale-110 transition-transform">
      <a className="" href={link} target="_blank">
        <img className="p-2" src={img} alt="Social item" />
      </a>
    </li>
  );
};

export default SocialItem;
