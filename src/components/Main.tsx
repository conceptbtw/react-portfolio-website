import About from "./About";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Experience from "./Experience";
import Contacts from "./Contacts";

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
