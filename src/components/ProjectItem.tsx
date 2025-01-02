import { ReactNode } from "react";

type ProjectItemProps = {
  img: string;
  time: string;
  name: string;
  description: string;
  children: ReactNode;
};

const ProjectItem = ({
  img,
  time,
  name,
  description,
  children,
}: ProjectItemProps) => {
  return (
    <li className="p-1 border rounded">
      <div className="">
        <img className="" src={img} alt="" />
      </div>
      <div className="">
        <time className="p-1 border rounded-full">{time}</time>
        <h2 className="">
          <a className="" href="" target="_blank">
            {name}
          </a>
        </h2>
        <p className="">{description}</p>
        <div className="">{children}</div>
      </div>
    </li>
  );
};

export default ProjectItem;
