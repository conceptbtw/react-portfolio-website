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
    <li className="p-4 grid md:grid-cols-2 gap-4 border border-primary/10 rounded-3xl bg-primary/10 shadow backdrop-blur">
      <div className="center">
        <a className="" href={link} target="_blank">
          <img
            className="border border-primary/10 rounded-xl aspect-video object-cover"
            src={img}
            alt="Project image"
          />
        </a>
      </div>
      <div className="flex flex-1 flex-col items-start gap-4">
        <time className="px-4 py-2 border border-primary/10 rounded-full text-accent font-bold bg-primary/10 shadow backdrop-blur">
          {time}
        </time>
        <h2 className="text-2xl font-bold hover:text-accent">
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
