import { useState } from "react";
import ImgWithFallback from "../utils/ImgWithFallback";

const Projects = (props) => {
  const { name, link, repo, body, tech, img, gif } = props;
  const [hover, setHover] = useState(false);

  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <ImgWithFallback
        src={hover ? gif.src : img.src}
        fallback={hover ? gif.fallback : img.fallback}
        alt={hover ? gif.alt : img.alt}
        className={`h-screen w-full object-cover hover:hidden ${
          img.class || "object-center"
        }`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      />
      <section className="flex flex-col items-center text-center justify-around">
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
