import { ReactNode } from "react";

type ProjectItemProps = {
  img: string;
  time: string;
  link: string;
  name: string;
  description: string;
  children: ReactNode;
};

const ProjectItem = ({ img, time, link, name, description, children }: ProjectItemProps) => {
  return (
    <li className="p-4 md:p-5 grid md:grid-cols-2 gap-4 md:gap-5 border border-primary/10 rounded-3xl bg-primary/10 shadow backdrop-blur">
      <div className="center border border-primary/10 rounded-xl shadow">
        <a href={link} target="_blank">
          <img className="rounded-xl aspect-video object-top object-cover" src={img} alt="Project image" />
        </a>
      </div>
      <div className="flex flex-1 flex-col items-start gap-4 md:gap-5">
        <time className="px-4 py-2 border border-primary/10 rounded-full text-accent font-bold bg-primary/10 shadow backdrop-blur">{time}</time>
        <h2 className="text-2xl font-bold hover:text-accent">
          <a href={link} target="_blank">
            {name}
          </a>
        </h2>
        <div className="flex-1">
          <p className="text-justify">{description}</p>
        </div>
        <div>{children}</div>
      </div>
    </li>
  );
};

export default ProjectItem;
