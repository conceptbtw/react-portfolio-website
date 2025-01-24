const ContactForm = () => {
  const inputStyles = "px-4 py-2 placeholder:text-accent/10 border focus:border-transparent border-primary/10 focus:outline outline-2 outline-accent rounded-xl bg-primary/10 shadow backdrop-blur";

  return (
    <form className="flex flex-col gap-4 md:gap-5">
      <label className="flex flex-col">
        Name:
        <input className={inputStyles} type="text" id="name" name="name" placeholder="John Doe" required />
      </label>
      <label className="flex flex-col">
        Email:
        <input className={inputStyles} type="email" id="email" name="email" placeholder="johndoe@gmail.com" required />
      </label>
      <label className="flex flex-col">
        Message:
        <textarea className={inputStyles} id="name" name="name" required />
      </label>
      <button className="px-4 py-2 border border-primary/10 rounded-xl bg-primary/10 shadow backdrop-blur active:scale-95 transition-all" type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
