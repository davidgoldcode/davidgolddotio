import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillLinkedin,
} from "react-icons/ai";

const Contact = () => {
  const iconSize = "2.5rem";

  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <section className="flex flex-col items-center justify-around h-3/6">
        <h1>Get in touch</h1>

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
