import ImgWithFallback from "../utils/ImgWithFallback";
import { default as webp } from "../assets/webp/davidnyc.webp";
import { default as gif } from "../assets/original/davidnyc.gif";

const Homepage = () => {
  return (
    <main className="grid grid-cols-2 h-screen w-screen">
      <ImgWithFallback
        src={webp}
        fallback={gif}
        alt="Gif of David in NYC"
        className="h-screen w-screen object-cover object-top"
      />
      <section className="flex flex-col items-center text-center justify-around">
        <header>
          <h1 className="text-4xl"> Hi, I'm David </h1>
          <h3 className="text-xl">Software Engineer</h3>
        </header>
        <section className="w-6/12">
          <h3 className="text-3xl">About</h3>
          <p>
            i am an aspiring developer, a basketball fan and a crocs enthusiast
            (seriously).{" "}
          </p>{" "}
          <br></br>
          <p>
            {" "}
            i am slated to finish a full-time, 6+ month intensive coding academy
            called lambda school in december. if you're interested in learning
            more about me or potentially working with me, feel free to contact
            me
          </p>
        </section>
      </section>
    </main>
  );
};

export default Homepage;
