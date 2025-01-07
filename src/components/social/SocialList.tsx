import { ReactNode } from "react";

type SocialListProps = {
  children: ReactNode;
};

const SocialList = ({ children }: SocialListProps) => {
  return <ul className="center flex-wrap gap-2">{children}</ul>;
};

export default SocialList;
