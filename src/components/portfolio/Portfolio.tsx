import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import StackList from "../stack/StackList";
import StackItem from "../stack/StackItem";

const Portfolio = () => {
  return (
    <section className="flex flex-col justify-center items-center">
      <h1 className="p-4 text-3xl font-bold" id="portfolio">
        Portfolio
      </h1>
      <ProjectList>
        <ProjectItem
          img="/ToDo.png"
          time="Nov 2024 - Dec 2024"
          link="https://conceptbtw-react-todo-app.netlify.app/"
          name="📝 ToDo"
          description="📝 ToDo"
        >
          <StackList>
            <StackItem img="https://skillicons.dev/icons?i=html" />
            <StackItem img="https://skillicons.dev/icons?i=css" />
            <StackItem img="https://skillicons.dev/icons?i=js" />
            <StackItem img="https://skillicons.dev/icons?i=react" />
            <StackItem img="https://skillicons.dev/icons?i=tailwind" />
            <StackItem img="https://skillicons.dev/icons?i=vite" />
          </StackList>
        </ProjectItem>
        <ProjectItem
          img="/Weather.png"
          time="Nov 2024 - Dec 2024"
          link="https://conceptbtw-react-weather-app.netlify.app/"
          name="⛅️ Weather"
          description="⛅️ Weather"
        >
          <StackList>
            <StackItem img="https://skillicons.dev/icons?i=html" />
            <StackItem img="https://skillicons.dev/icons?i=css" />
            <StackItem img="https://skillicons.dev/icons?i=js" />
            <StackItem img="https://skillicons.dev/icons?i=react" />
            <StackItem img="https://skillicons.dev/icons?i=tailwind" />
            <StackItem img="https://skillicons.dev/icons?i=vite" />
          </StackList>
        </ProjectItem>
        <ProjectItem
          img="/ToDo.png"
          time="Dec 2024 - Present"
          link=""
          name="💼 Portfolio"
          description="💼 Portfolio"
        >
          <StackList>
            <StackItem img="https://skillicons.dev/icons?i=html" />
            <StackItem img="https://skillicons.dev/icons?i=css" />
            <StackItem img="https://skillicons.dev/icons?i=js" />
            <StackItem img="https://skillicons.dev/icons?i=ts" />
            <StackItem img="https://skillicons.dev/icons?i=react" />
            <StackItem img="https://skillicons.dev/icons?i=tailwind" />
            <StackItem img="https://skillicons.dev/icons?i=vite" />
          </StackList>
        </ProjectItem>
      </ProjectList>
    </section>
  );
};

export default Portfolio;
