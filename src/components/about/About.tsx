const About = () => {
  return (
    <section className="grid grid-cols-2 gap-4">
      <div className="center">
        <h1 className="p-4 text-3xl font-bold" id="about">
          Hello! My name is Illia Movchko. I'm a
          <span className="text-accent"> frontend developer</span> from Lviv,
          Ukraine.
        </h1>
      </div>
      <div className="center">
        <img
          className="max-h-64 rounded-full border border-white/10"
          src="/Illia.jpg"
          alt=""
        />
      </div>
    </section>
  );
};

export default About;
