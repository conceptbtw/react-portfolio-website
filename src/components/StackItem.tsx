type StackItemProps = {
  img: string;
};

const StackItem = ({ img }: StackItemProps) => {
  return (
    <li className="size-8 flex justify-center items-center p-1 border rounded-full">
      <img className="h-6" src={img} alt="" />
    </li>
  );
};

export default StackItem;
