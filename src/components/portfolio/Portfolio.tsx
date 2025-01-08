import ProjectList from "./ProjectList";
import ProjectItem from "./ProjectItem";
import StackList from "../stack/StackList";
import StackItem from "../stack/StackItem";

const Portfolio = () => {
  return (
    <section className="pt-10 center flex-col">
      <h1 className="p-4 text-6xl font-bold scroll-m-[77px]" id="portfolio">
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
            <StackItem
              img="https://skillicons.dev/icons?i=html"
              title="HTML5"
            />
            <StackItem img="https://skillicons.dev/icons?i=css" title="CSS3" />
            <StackItem
              img="https://skillicons.dev/icons?i=js"
              title="JavaScript"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=react"
              title="React"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=tailwind"
              title="Tailwind CSS"
            />
            <StackItem img="https://skillicons.dev/icons?i=vite" title="Vite" />
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
            <StackItem
              img="https://skillicons.dev/icons?i=html"
              title="HTML5"
            />
            <StackItem img="https://skillicons.dev/icons?i=css" title="CSS3" />
            <StackItem
              img="https://skillicons.dev/icons?i=js"
              title="JavaScript"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=react"
              title="React"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=tailwind"
              title="Tailwind CSS"
            />
            <StackItem img="https://skillicons.dev/icons?i=vite" title="Vite" />
          </StackList>
        </ProjectItem>
        <ProjectItem
          img="/ToDo.png"
          time="Dec 2024 - Present"
          link=""
          name="👨‍💻 Portfolio"
          description="👨‍💻 Portfolio"
        >
          <StackList>
            <StackItem
              img="https://skillicons.dev/icons?i=html"
              title="HTML5"
            />
            <StackItem img="https://skillicons.dev/icons?i=css" title="CSS3" />
            <StackItem
              img="https://skillicons.dev/icons?i=js"
              title="JavaScript"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=ts"
              title="TypeScript"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=react"
              title="React"
            />
            <StackItem
              img="https://skillicons.dev/icons?i=tailwind"
              title="Tailwind CSS"
            />
            <StackItem img="https://skillicons.dev/icons?i=vite" title="Vite" />
          </StackList>
        </ProjectItem>
      </ProjectList>
    </section>
  );
};

export default Portfolio;
