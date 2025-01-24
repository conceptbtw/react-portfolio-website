import About from "../about/About";
import Skills from "../skills/Skills";
import Portfolio from "../portfolio/Portfolio";
import Experience from "../experience/Experience";
import Contacts from "../contacts/Contacts";

const Main = () => {
  return (
    <main className="max-w-screen-xl p-4 md:p-5 center flex-col gap-8 md:gap-10">
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Contacts />
    </main>
  );
};

export default Main;
