import SkillList from "./SkillList";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="">Skills</h1>
      <div className="grid grid-cols-2">
        <section className="flex flex-col items-center">
          <h2 className="">Hard skills</h2>
          <SkillList>
            <SkillItem skill="HTML5" />
            <SkillItem skill="CSS3" />
            <SkillItem skill="JavaScript" />
            <SkillItem skill="TypeScript" />
            <SkillItem skill="React" />
            <SkillItem skill="Redux (Redux Toolkit)" />
            <SkillItem skill="jQuery" />
            <SkillItem skill="SASS (SCSS)" />
            <SkillItem skill="Tailwind CSS" />
            <SkillItem skill="Bootstrap" />
            <SkillItem skill="Vite" />
          </SkillList>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="">Soft skills</h2>
          <SkillList>
            <SkillItem skill="Teamwork" />
            <SkillItem skill="Time management" />
          </SkillList>
        </section>
      </div>
    </section>
  );
};

export default Skills;
