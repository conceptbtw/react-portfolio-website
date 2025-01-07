const About = () => {
  return (
    <section className="pt-16 grid grid-cols-2 gap-4 scroll-m-16" id="about">
      <div className="center">
        <h1 className="p-4 text-3xl font-bold">
          Hello! My name is Illia Movchko. I'm a
          <span className="text-accent"> frontend developer</span> from Lviv,
          Ukraine.
        </h1>
      </div>
      <div className="center">
        <img
          className="w-2/3 rounded-full border-2 border-accent shadow"
          src="/Illia.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
