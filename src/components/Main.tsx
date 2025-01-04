import About from "./about/About";
import Skills from "./skills/Skills";
import Portfolio from "./portfolio/Portfolio";
import Experience from "./experience/Experience";
import Contacts from "./contacts/Contacts";

const Main = () => {
  return (
    <main className="max-w-3xl">
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contacts />
    </main>
  );
};

export default Main;
