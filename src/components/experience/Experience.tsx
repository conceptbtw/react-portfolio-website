import StackItem from "../stack/StackItem";
import StackList from "../stack/StackList";
import ExperienceItem from "./ExperienceItem";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  return (
    <section className="pt-10 center flex-col">
      <h1 className="p-4 text-6xl font-bold scroll-m-[77px]" id="experience">
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
            <StackItem img="https://skillicons.dev/icons?i=html" title="HTML5" />
            <StackItem img="https://skillicons.dev/icons?i=css" title="CSS3" />
            <StackItem img="https://skillicons.dev/icons?i=js" title="JavaScript" />
            <StackItem img="https://skillicons.dev/icons?i=react" title="React" />
            <StackItem img="https://skillicons.dev/icons?i=sass" title="SASS (SCSS)" />
          </StackList>
        </ExperienceItem>
      </ExperienceList>
    </section>
  );
};

export default Experience;
