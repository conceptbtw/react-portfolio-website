import SocialItem from "../social/SocialItem";
import SocialList from "../social/SocialList";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <section className="pt-10 center flex-col">
      <h1 className="p-4 text-6xl font-bold scroll-m-[77px]" id="contacts">
        Contacts
      </h1>
      <div className="w-full p-4 grid md:grid-cols-2 gap-4 border border-primary/10 rounded-3xl bg-primary/10 shadow backdrop-blur">
        <ContactForm />
        <SocialList>
          <SocialItem
            link="https://t.me/conceptbtw"
            img="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/512px-Telegram_logo.svg.png"
          />
          <SocialItem
            link="https://github.com/conceptbtw"
            img="https://skillicons.dev/icons?i=github"
          />
          <SocialItem
            link="https://www.linkedin.com/in/illiamovchko/"
            img="https://skillicons.dev/icons?i=linkedin"
          />
        </SocialList>
      </div>
    </section>
  );
};

export default Contacts;
