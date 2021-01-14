import { useState } from "react";
import ImgWithFallback from "../utils/ImgWithFallback";
import { default as cautionsvg } from "../../src/assets/original/cautiontape.svg";
import { default as cautionwebp } from "../../src/assets/webp/cautiontape.webp";

const Projects = (props) => {
  const { name, link, repo, body, tech, img, gif } = props;
  const [hover, setHover] = useState(false);

  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <ImgWithFallback
        src={hover ? gif.src : img.src}
        fallback={hover ? gif.fallback : img.fallback}
        alt={hover ? gif.alt : img.alt}
        className={`h-screen w-full relative col-start-1 col-end-1 inset-0 object-cover relative hover:hidden ${
          img.class || "object-center"
        }`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
      <div className="absolute text-center">
        <ImgWithFallback
          src={cautionwebp}
          fallback={cautionsvg}
          className="mt-40 left-0 transform -rotate-12"
          alt="Under Construction"
        />
        <h2 className="bg-white text-red-500 top-2/4 left-2/4 -translate-y-1/2 -translate-x-1/2	">
          WIP: Check back later
        </h2>
      </div>

      <section className="flex flex-col col-start-2 col-end-2 items-center text-center justify-around">
        <header className="w-8/12">
          <h1 className="text-2xl font-black uppercase m-1"> Projects </h1>
        </header>
        <section className="w-8/12">
          <h3 className="text-2xl font-black uppercase m-1">The Rotation</h3>
          <p>{body}</p>
        </section>
        <section className="w-8/12">
          <h3 className="text-2xl font-black uppercase m-1">Tech:</h3>
          <ul className="list-none">
            {tech.map((item) => (
              <li class="text-xs m-0.5 font-semibold inline-block border-2 border-gray-200 py-1 px-2 uppercase rounded-full text-gray-600 bg-blue-200">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex flex-row w-8/12 justify-around">
          <a href={repo} className="uppercase text-xl font-black uppercase m-1">
            See more
          </a>
        </footer>
      </section>
    </main>
  );
};

export default Projects;
