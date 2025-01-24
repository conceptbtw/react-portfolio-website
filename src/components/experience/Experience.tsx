import StackItem from "../stack/StackItem";
import StackList from "../stack/StackList";
import ExperienceItem from "./ExperienceItem";
import ExperienceList from "./ExperienceList";

const Experience = () => {
  const skillicons = "https://skillicons.dev/icons?i=";

  return (
    <section className="center flex-col">
      <h1 className="p-4 md:p-5 text-4xl md:text-6xl font-bold scroll-m-[77px]" id="experience">
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
            <StackItem img={`${skillicons}html`} title="HTML5" />
            <StackItem img={`${skillicons}css`} title="CSS3" />
            <StackItem img={`${skillicons}js`} title="JavaScript" />
            <StackItem img={`${skillicons}react`} title="React" />
            <StackItem img={`${skillicons}sass`} title="SASS (SCSS)" />
          </StackList>
        </ExperienceItem>
      </ExperienceList>
    </section>
  );
};

export default Experience;
