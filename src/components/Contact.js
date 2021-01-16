import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import GitHubCalendar from "react-github-calendar";

const Contact = () => {
  return (
    <main className="flex flex-col items-center text-center justify-around h-screen w-screen">
      <h1>See other projects on Github</h1>
      <div className="md: w-9/12">
        <GitHubCalendar username="davidgoldcode" />
      </div>
      <div className="flex flex-col items-center h-1/3 w-9/12">
        <h1>Get in touch</h1>
        <p className="md:text-xl text-base font-black ">Project idea?</p>
        <p className="md:text-xl text-base font-black ">Business inquiry?</p>
        <p className="md:text-xl text-base font-black ">Dad joke?</p>
        <p className="md:text-xl text-base ">
          Reach out below 👇 and say hello{" "}
        </p>
      </div>
      <section className="flex items-center justify-around w-3/5">
        <a href="https://github.com/davidgoldcode">
          <AiFillGithub />
        </a>
        <a href="mailto:davidgold@hey.com">
          <AiOutlineMail />
        </a>
        <a href="https://twitter.com/davidigold">
          <AiOutlineTwitter />
        </a>
        <a href="https://golddavid.medium.com">
          <AiFillMediumSquare />
        </a>
        <a href="https://www.linkedin.com/in/davidigold/">
          <AiFillLinkedin />
        </a>
      </section>
    </main>
  );
};

export default Contact;
