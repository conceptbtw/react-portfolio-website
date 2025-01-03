type StackItemProps = {
  img: string;
};

const StackItem = ({ img }: StackItemProps) => {
  return (
    <li className="size-12 flex justify-center items-center border rounded-full">
      <img className="p-2" src={img} alt="" />
    </li>
  );
};

export default StackItem;
