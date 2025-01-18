import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import StackList from "../stack/StackList";
import StackItem from "../stack/StackItem";

const Portfolio = () => {
  const skillicons = "https://skillicons.dev/icons?i=";

  return (
    <section className="pt-10 center flex-col">
      <h1 className="p-4 text-6xl font-bold scroll-m-[77px]" id="portfolio">
        Portfolio
      </h1>
      <ProjectList>
        <ProjectItem
          img="/ToDo.png"
          time="Nov 2024 - Jan 2025"
          link="https://conceptbtw-react-todo-app.netlify.app/"
          name="📝 ToDo"
          description="A ToDo app built with HTML5, CSS3, JavaScript, React, Tailwind CSS, and Vite. You can add, mark as completed, edit, and delete tasks. The app is responsive and performs quickly with React and Vite."
        >
          <StackList>
            <StackItem img={`${skillicons}html`} title="HTML5" />
            <StackItem img={`${skillicons}css`} title="CSS3" />
            <StackItem img={`${skillicons}js`} title="JavaScript" />
            <StackItem img={`${skillicons}react`} title="React" />
            <StackItem img={`${skillicons}tailwind`} title="Tailwind CSS" />
            <StackItem img={`${skillicons}vite`} title="Vite" />
          </StackList>
        </ProjectItem>
        <ProjectItem
          img="/Weather.png"
          time="Nov 2024 - Jan 2025"
          link="https://conceptbtw-react-weather-app.netlify.app/"
          name="⛅️ Weather"
          description="A responsive Weather app built with HTML5, CSS3, JavaScript, React, Tailwind CSS, and Vite. It utilizes the OpenWeather API to display real-time weather data and a 7-day forecast. Features include temperature, humidity, wind speed, and sky conditions with a city-based search."
        >
          <StackList>
            <StackItem img={`${skillicons}html`} title="HTML5" />
            <StackItem img={`${skillicons}css`} title="CSS3" />
            <StackItem img={`${skillicons}js`} title="JavaScript" />
            <StackItem img={`${skillicons}react`} title="React" />
            <StackItem img={`${skillicons}tailwind`} title="Tailwind CSS" />
            <StackItem img={`${skillicons}vite`} title="Vite" />
          </StackList>
        </ProjectItem>
        <ProjectItem img="/ToDo.png" time="Dec 2024 - Present" link="https://conceptbtw.netlify.app/" name="👨‍💻 Portfolio" description="👨‍💻 Portfolio">
          <StackList>
            <StackItem img={`${skillicons}html`} title="HTML5" />
            <StackItem img={`${skillicons}css`} title="CSS3" />
            <StackItem img={`${skillicons}js`} title="JavaScript" />
            <StackItem img={`${skillicons}ts`} title="TypeScript" />
            <StackItem img={`${skillicons}react`} title="React" />
            <StackItem img={`${skillicons}tailwind`} title="Tailwind CSS" />
            <StackItem img={`${skillicons}vite`} title="Vite" />
          </StackList>
        </ProjectItem>
        <ProjectItem img="/ToDo.png" time="Jan 2025 - Present" link="" name="🛍️ Store" description="🛍️ Store">
          <StackList>
            <StackItem img={`${skillicons}html`} title="HTML5" />
            <StackItem img={`${skillicons}css`} title="CSS3" />
            <StackItem img={`${skillicons}js`} title="JavaScript" />
            <StackItem img={`${skillicons}ts`} title="TypeScript" />
            <StackItem img={`${skillicons}react`} title="React" />
            <StackItem img={`${skillicons}mui`} title="MUI" />
            <StackItem img={`${skillicons}vite`} title="Vite" />
          </StackList>
        </ProjectItem>
      </ProjectList>
    </section>
  );
};

export default Portfolio;
