import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import GitHubCalendar from "react-github-calendar";

const Contact = () => {
  const iconSize = "4rem";

  return (
    <main className="flex flex-col items-center justify-around h-screen w-screen">
      <h1 className="text-4xl font-black uppercase p-4">
        See other projects on Github
      </h1>
      <GitHubCalendar username="davidgoldcode" />
      <div className="flex flex-col items-center h-1/3">
        <h1 className="text-4xl font-black uppercase">Get in touch</h1>
        <p className="text-xl font-black ">Project idea?</p>
        <p className="text-xl font-black ">Business inquiry?</p>
        <p className="text-xl font-black ">Dad joke?</p>
        <p className="text-xl ">Reach out below 👇 and say hello </p>
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
