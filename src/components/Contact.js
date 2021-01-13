import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
  const iconSize = "4rem";

  return (
    <main className="flex flex-col items-center justify-evenly h-screen w-screen p-4	">
      <h1 className="text-4xl font-black uppercase">Get in touch</h1>

      <div className="flex flex-col items-center h-1/3">
        <p className="text-xl font-black uppercase">Project idea?</p>
        <p className="text-xl font-black uppercase">Business inquiry?</p>
        <p className="text-xl font-black uppercase">Dad joke?</p>
        <p className="text-xl uppercase">Reach out below and say hello 👋</p>
      </div>
      <section className="flex items-center justify-around w-3/5">
        <a href="https://github.com/davidgoldcode">
          <AiFillGithub style={{ fontSize: iconSize }} />
        </a>
        <a href="mailto:davidgold@hey.com">
          <AiOutlineMail style={{ fontSize: iconSize }} />
        </a>
        <a href="https://twitter.com/davidigold">
          <AiOutlineTwitter style={{ fontSize: iconSize }} />
        </a>
        <a href="https://golddavid.medium.com">
          <AiFillMediumSquare style={{ fontSize: iconSize }} />
        </a>
        <a href="https://www.linkedin.com/in/davidigold/">
          <AiFillLinkedin style={{ fontSize: iconSize }} />
        </a>
      </section>
    </main>
  );
};

export default Contact;
