import SocialItem from "../social/SocialItem";
import SocialList from "../social/SocialList";

const Contacts = () => {
  return (
    <section className="pt-16 center flex-col">
      <h1 className="p-4 text-3xl font-bold scroll-m-16" id="contacts">
        Contacts
      </h1>
      <div className="p-4 border border-white/10 rounded-3xl bg-white/10 shadow backdrop-blur">
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
