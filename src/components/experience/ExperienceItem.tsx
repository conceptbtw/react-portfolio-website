import { ReactNode } from "react";

type ExperienceItemProps = {
  time: string;
  name: string;
  role: string;
  description: string;
  children: ReactNode;
};

const ExperienceItem = ({
  time,
  name,
  role,
  description,
  children,
}: ExperienceItemProps) => {
  return (
    <li className="p-4 flex flex-col items-start gap-4 border border-primary/10 rounded-3xl bg-primary/10 shadow backdrop-blur">
      <time className="px-4 py-2 border border-primary/10 rounded-full text-accent font-bold bg-primary/10 shadow backdrop-blur">
        {time}
      </time>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-accent text-xl font-bold">{role}</p>
      <p className="text-justify">{description}</p>
      <div>{children}</div>
    </li>
  );
};

export default ExperienceItem;
