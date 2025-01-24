const About = () => {
  return (
    <section className="h-svh md:-mt-[77px] grid md:grid-cols-5 gap-4 md:gap-5 scroll-m-[77px]" id="about">
      <div className="center md:col-span-3">
        <h1 className="text-justify text-4xl md:text-6xl font-bold">
          Hello! My name is Illia Movchko. I'm a 20 y/o
          <span className="text-accent"> frontend developer</span> from Lviv, Ukraine.
        </h1>
      </div>
      <div className="center md:col-span-2">
        <img className="rounded-full border-2 border-accent shadow" src="/Illia.jpg" alt="Illia image" />
      </div>
    </section>
  );
};

export default About;
