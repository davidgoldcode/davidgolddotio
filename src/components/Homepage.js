import ImgWithFallback from "../utils/ImgWithFallback";
import { useState } from "react";
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
import { default as svg } from "../assets/original/img.svg";

const Homepage = () => {
  const [hover, setHover] = useState(false);

  return (
    <main className="grid md:grid-cols-2 md:grid-rows-1 grid-cols-1 grid-rows-2 h-screen w-screen overflow-hidden">
      <ImgWithFallback
        src={hover ? webp : svg}
        fallback={hover ? gif : svg}
        alt="Gif of David in NYC"
        className="w-full h-full md:col-start-1 md:col-end-1 md:row-span-1 sm:row-start-1 sm:row-end-1 sm:col-span-1 object-cover object-top"
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
      <section className="md:w-10/12 sm:w-11/12 mx-auto flex flex-col md:col-start-2 md:col-end-2 md:row-span-1 sm:row-start-2 sm:row-end-2 sm:col-span-1 items-center text-center justify-around">
        <header>
          <h1>Hi 👋 I'm David</h1>
        </header>
        <section>
          <h3 className="md:text-2xl text-l font-black uppercase m-1">About</h3>
          <p className="md:text-base text-sm">
            I am an aspiring developer, a basketball fan and a crocs enthusiast
            (seriously){" "}
          </p>{" "}
          <br></br>
          <p className="md:text-base text-sm sm:contents hidden">
            {" "}
            I recently finished a full-time, 6+ month intensive coding academy
            called Lambda School. If you're interested in learning more about me
            or potentially working with me, feel free to contact me
          </p>
        </section>
        <section>
          <h3 className="md:text-2xl text-l font-black uppercase m-1">
            Skills
          </h3>
          <ul className="list-none ">
            {skills.map((item) => (
              <li class="text-xs sm:m-0.5 font-semibold inline-block border-2 border-gray-200 md:py-1 md:px-2 px-1 uppercase rounded-full text-gray-600 bg-blue-200">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex flex-row">
          <a
            href="https://github.com/davidgoldcode"
            className="text-xl sm:text-4xl"
          >
            <AiFillGithub />
          </a>
          <a href="mailto:davidgold@hey.com" className="text-xl sm:text-4xl">
            <AiOutlineMail />
          </a>
          <a
            href="https://twitter.com/davidigold"
            className="text-xl sm:text-4xl"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://golddavid.medium.com"
            className="text-xl sm:text-4xl"
          >
            <AiFillMediumSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/davidigold/"
            className="text-xl sm:text-4xl"
          >
            <AiFillLinkedin />
          </a>
        </footer>
      </section>
    </main>
  );
};

export default Homepage;
