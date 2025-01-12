const About = () => {
  return (
    <section
      className="h-svh -mt-[77px] grid md:grid-cols-3 gap-4 scroll-m-[77px]"
      id="about"
    >
      <div className="center md:col-span-2">
        <h1 className="text-6xl font-bold">
          Hello! My name is Illia Movchko. I'm a 20 y/o
          <span className="text-accent"> frontend developer</span> from Lviv,
          Ukraine.
        </h1>
      </div>
      <div className="center">
        <img
          className="rounded-full border-2 border-accent shadow"
          src="/Illia.jpg"
          alt="Illia image"
        />
      </div>
    </section>
  );
};

export default About;
