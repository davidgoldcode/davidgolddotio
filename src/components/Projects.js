import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ImgWithFallback from "../utils/ImgWithFallback";

const Projects = (props) => {
  const { name, link, repo, body, tech, img, gif } = props;
  const [hover, setHover] = useState(false);

  return (
    <main className="grid md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 h-screen w-screen overflow-hidden">
      <ImgWithFallback
        src={hover ? gif.src : img.src}
        fallback={hover ? gif.fallback : img.fallback}
        alt={hover ? gif.alt : img.alt}
        className={`w-full h-full md:col-start-1 md:col-end-1 md:row-span-1 sm:row-start-1 sm:row-end-1 sm:col-span-1 hover:hidden ${
          img.class || "object-contain"
        }`}
        onMouseOver={gif.src ? () => setHover(true) : null}
        onMouseOut={gif.src ? () => setHover(false) : null}
      />
      <section className="md:w-10/12 sm:w-11/12 mx-auto flex flex-col md:col-start-2 md:col-end-2 md:row-span-1 sm:row-start-2 sm:row-end-2 sm:col-span-1 items-center text-center justify-around">
        <header>
          <h1 className="text-2xl font-black uppercase m-1"> Projects </h1>
        </header>
        <section>
          <h3 className="md:text-2xl sm:text-xl font-black uppercase m-1">
            {name}
          </h3>
          <p className="md:text-base sm:text-sm">{body}</p>
        </section>
        <section>
          <h3 className="md:text-2xl sm:text-xl font-black uppercase m-1">
            Tech:
          </h3>
          <ul className="list-none">
            {tech.map((item) => (
              <li
                key={uuidv4()}
                className="text-xs m-0.5 font-semibold inline-block border-2 py-1 px-2 uppercase rounded-full"
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex flex-row justify-around">
          <a
            href={repo}
            className={`uppercase text-xl uppercase m-1 ${
              !repo && "invisible"
            }`}
          >
            See more
          </a>
        </footer>
      </section>
    </main>
  );
};

export default Projects;
