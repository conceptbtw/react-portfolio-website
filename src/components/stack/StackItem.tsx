type StackItemProps = {
  img: string;
  title: string;
};

const StackItem = ({ img, title }: StackItemProps) => {
  return (
    <li className="size-12 hover:mx-1 center border hover:border-transparent border-primary/10 hover:outline outline-2 outline-accent rounded-full bg-primary/10 shadow backdrop-blur hover:scale-110 transition-all">
      <img className="p-2" src={img} alt={`${title} logo`} title={title} />
    </li>
  );
};

export default StackItem;
