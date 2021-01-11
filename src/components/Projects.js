import ImgWithFallback from "../utils/ImgWithFallback";

const Projects = (props) => {
  const { name, link, repo, body, tech, img } = props;
  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <ImgWithFallback
        src={img.src}
        fallback={img.fallback}
        alt={img.alt}
        className={`h-screen w-screen object-cover ${
          img.class || "object-center"
        }`}
      />

      <section className="flex flex-col items-center text-center justify-around">
        <header className="w-8/12">
          <h1 className="text-4xl"> Project </h1>
        </header>
        <section className="w-8/12">
          <h3 className="text-2xl font-black uppercase m-1">The Rotation</h3>
          <p>{body}</p>
        </section>
        <section className="w-8/12">
          <h3 className="text-2xl font-black uppercase m-1">Tech:</h3>
          <ul className="list-none">
            {tech.map((item) => (
              <li class="text-xs m-0.5 font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200">
                {item}
              </li>
            ))}
          </ul>
        </section>
        <footer className="flex flex-row w-8/12 justify-around">
          <a href="https://github.com/davidgoldcode">{repo}</a>
        </footer>
      </section>
    </main>
  );
};

export default Projects;
