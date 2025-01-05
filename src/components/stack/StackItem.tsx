type StackItemProps = {
  img: string;
};

const StackItem = ({ img }: StackItemProps) => {
  return (
    <li className="size-12 flex justify-center items-center border border-white/10 outline-2 outline-accent rounded-full hover:outline hover:scale-110 transition-transform">
      <img className="p-2" src={img} alt="" />
    </li>
  );
};

export default StackItem;