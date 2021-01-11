import ImgWithFallback from "../utils/ImgWithFallback";
import {
  AiFillGithub,
  AiOutlineMail,
  AiOutlineTwitter,
  AiFillMediumSquare,
  AiFillLinkedin,
} from "react-icons/ai";
import { skills } from "../data";
import { default as gif } from "../assets/original/davidnyc.gif";
import { default as webp } from "../assets/webp/davidnyc.webp";

const Homepage = () => {
  const iconSize = "2.5rem";

  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <ImgWithFallback
        src={webp}
        fallback={gif}
        alt="Gif of David in NYC"
        className="h-screen w-screen object-cover object-top"
      />
      <section className="flex flex-col items-center text-center justify-around">
        <header className="w-8/12">
          <h1 className="text-4xl"> Hi 👋 I'm David </h1>
        </header>
        <section className="w-8/12">
          <h3 className="text-2xl font-black uppercase m-1">About</h3>
          <p>
            I am an aspiring developer, a basketball fan and a crocs enthusiast
            (seriously){" "}
          </p>{" "}
          <br></br>
          <p>
            {" "}
            I recently finished a full-time, 6+ month intensive coding academy
            called Lambda School. If you're interested in learning more about me
            or potentially working with me, feel free to contact me
          </p>
        </section>
        <section className="w-8/12">
          <h3 className="text-2xl font-black uppercase m-1">Skills</h3>
          <ul className="list-none">
            {skills.map((item) => (
              <li class="text-xs m-0.5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex flex-row w-8/12 justify-around">
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
        </footer>
      </section>
    </main>
  );
};

export default Homepage;
