import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import StackList from "./StackList";
import StackItem from "./StackItem";

const Portfolio = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="">Portfolio</h1>
      <ProjectList>
        <ProjectItem
          img=""
          time="Nov 2024 - Dec 2024"
          name="📝 ToDo"
          description="📝 ToDo"
        >
          <StackList>
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
          </StackList>
        </ProjectItem>
        <ProjectItem
          img=""
          time="Nov 2024 - Dec 2024"
          name="⛅️ Weather"
          description="⛅️ Weather"
        >
          <StackList>
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
          </StackList>
        </ProjectItem>
        <ProjectItem
          img=""
          time="Dec 2024 - Present"
          name="💼 Portfolio"
          description="💼 Portfolio"
        >
          <StackList>
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
            <StackItem img="" />
          </StackList>
        </ProjectItem>
      </ProjectList>
    </section>
  );
};

export default Portfolio;
