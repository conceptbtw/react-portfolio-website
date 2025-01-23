import SkillList from "./SkillList";
import SkillItem from "./SkillItem";

const Skills = () => {
  const skillicons = "https://skillicons.dev/icons?i=";
  const emojiicons = "https://em-content.zobj.net/source/microsoft-teams/363/";

  return (
    <section className="center flex-col">
      <h1 className="p-4 text-6xl font-bold scroll-m-[77px]" id="skills">
        Skills
      </h1>
      <div className="w-full grid md:grid-cols-2 gap-4">
        <section className="flex flex-col items-center">
          <h2 className="p-2 text-center text-4xl font-bold">
            <span className="text-accent">Hard</span> skills
          </h2>
          <SkillList>
            <SkillItem img={`${skillicons}html`} skill="HTML5" />
            <SkillItem img={`${skillicons}css`} skill="CSS3" />
            <SkillItem img={`${skillicons}js`} skill="JavaScript" />
            <SkillItem img={`${skillicons}ts`} skill="TypeScript" />
            <SkillItem img={`${skillicons}react`} skill="React" />
            <SkillItem img={`${skillicons}redux`} skill="Redux (Redux Toolkit)" />
            <SkillItem img={`${skillicons}jquery`} skill="jQuery" />
            <SkillItem img={`${skillicons}sass`} skill="SASS (SCSS)" />
            <SkillItem img={`${skillicons}tailwind`} skill="Tailwind CSS" />
            <SkillItem img={`${skillicons}bootstrap`} skill="Bootstrap" />
            <SkillItem img={`${skillicons}mui`} skill="Material UI" />
            <SkillItem img={`${skillicons}vite`} skill="Vite" />
            <SkillItem img={`${skillicons}git`} skill="Git" />
            <SkillItem img={`${skillicons}github`} skill="GitHub" />
            <SkillItem img="https://flagcdn.com/us.svg" skill="B2 (Upper intermediate) English" />
          </SkillList>
        </section>
        <section className="flex flex-col items-center">
          <h2 className="p-2 text-center text-4xl font-bold">
            <span className="text-accent">Soft</span> skills
          </h2>
          <SkillList>
            <SkillItem img={`${emojiicons}speaking-head_1f5e3-fe0f.png`} skill="Communication" />
            <SkillItem img={`${emojiicons}handshake_1f91d.png`} skill="Teamwork" />
            <SkillItem img={`${emojiicons}stopwatch_23f1-fe0f.png`} skill="Time management" />
            <SkillItem img={`${emojiicons}thinking-face_1f914.png`} skill="Critical Thinking" />
            <SkillItem img={`${emojiicons}person-juggling_1f939.png`} skill="Adaptability" />
            <SkillItem img={`${emojiicons}person-in-lotus-position_1f9d8.png`} skill="Patience" />
            <SkillItem img={`${emojiicons}artist-palette_1f3a8.png`} skill="Creativity" />
          </SkillList>
        </section>
      </div>
    </section>
  );
};

export default Skills;
