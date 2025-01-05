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
    <li className="h-full p-4 flex flex-1 flex-col items-start gap-2 border border-white/10 rounded-3xl">
      <time className="px-4 py-2 border border-white/10 rounded-full text-accent font-bold">
        {time}
      </time>
      <h2 className="text-2xl font-bold">{name}</h2>
      <p className="text-accent font-bold">{role}</p>
      <div className="flex-1">
        <p className="">{description}</p>
      </div>
      <div className="">{children}</div>
    </li>
  );
};

export default ExperienceItem;
