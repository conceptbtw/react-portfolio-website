import StackItem from "../stack/StackItem";
import StackList from "../stack/StackList";
import ExperienceItem from "./ExperienceItem";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  return (
    <section className="center flex-col">
      <h1 className="p-4 text-3xl font-bold" id="experience">
        Experience
      </h1>
      <ExperienceList>
        <ExperienceItem
          time="Jun 2024 - Aug 2024"
          name="E-commerce Project"
          role="Frontend developer"
          description="Optimized and improved responsive user interfaces, enhancing user interaction with the platform. Identified and resolved bugs to improve stability and performance."
        >
          <StackList>
            <StackItem img="https://skillicons.dev/icons?i=html" />
            <StackItem img="https://skillicons.dev/icons?i=css" />
            <StackItem img="https://skillicons.dev/icons?i=js" />
            <StackItem img="https://skillicons.dev/icons?i=react" />
            <StackItem img="https://skillicons.dev/icons?i=scss" />
          </StackList>
        </ExperienceItem>
      </ExperienceList>
    </section>
  );
};

export default Experience;
