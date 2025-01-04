import { ReactNode } from "react";

type ProjectItemProps = {
  img: string;
  time: string;
  link: string;
  name: string;
  description: string;
  children: ReactNode;
};

const ProjectItem = ({
  img,
  time,
  link,
  name,
  description,
  children,
}: ProjectItemProps) => {
  return (
    <li className="p-2 h-full flex flex-col md:flex-row justify-center items-stretch gap-2 border border-white/10 rounded-3xl">
      <div className="border border-white/10 rounded-2xl">
        <a className="" href={link} target="_blank">
          <img
            className="max-h-64 rounded-2xl aspect-video object-cover"
            src={img}
            alt="Project image"
          />
        </a>
      </div>
      <div className="flex flex-1 flex-col items-start gap-2">
        <time className="p-2 border border-white/10 rounded-full">{time}</time>
        <h2 className="text-2xl">
          <a className="" href={link} target="_blank">
            {name}
          </a>
        </h2>
        <div className="flex-1">
          <p className="">{description}</p>
        </div>
        <div className="">{children}</div>
      </div>
    </li>
  );
};

export default ProjectItem;
