import SkillList from "./SkillList";
import SkillItem from "./SkillItem";

const Skills = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="p-4 text-3xl" id="skills">
        Skills
      </h1>
      <div className="w-full grid grid-cols-2 gap-2">
        <section className="flex flex-col items-center">
          <h2 className="p-2 text-2xl">Hard skills</h2>
          <SkillList>
            <SkillItem
              img="https://skillicons.dev/icons?i=html"
              skill="HTML5"
            />
            <SkillItem img="https://skillicons.dev/icons?i=css" skill="CSS3" />
            <SkillItem
              img="https://skillicons.dev/icons?i=js"
              skill="JavaScript"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=ts"
              skill="TypeScript"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=react"
              skill="React"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=redux"
              skill="Redux (Redux Toolkit)"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=jquery"
              skill="jQuery"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=sass"
              skill="SASS (SCSS)"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=tailwind"
              skill="Tailwind CSS"
            />
            <SkillItem
              img="https://skillicons.dev/icons?i=bootstrap"
              skill="Bootstrap"
            />
            <SkillItem img="https://skillicons.dev/icons?i=vite" skill="Vite" />
          </SkillList>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="p-2 text-2xl">Soft skills</h2>
          <SkillList>
            <SkillItem
              img="https://em-content.zobj.net/source/microsoft-teams/363/handshake_1f91d.png"
              skill="Teamwork"
            />
            <SkillItem
              img="https://em-content.zobj.net/source/microsoft-teams/363/stopwatch_23f1-fe0f.png"
              skill="Time management"
            />
            <SkillItem
              img="https://em-content.zobj.net/source/microsoft-teams/363/artist-palette_1f3a8.png"
              skill="Creativity"
            />
          </SkillList>
        </section>
      </div>
    </section>
  );
};

export default Skills;
