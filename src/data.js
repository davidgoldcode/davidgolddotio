import { default as rotationsvg } from "./assets/original/therotation.svg";
import { default as rotationwebp } from "./assets/webp/therotation.webp";
import { default as deathmetalgif } from "./assets/original/deathmetal.gif";
import { default as deathmetalwebp } from "./assets/webp/deathmetal.webp";
import { default as deathmetalstillsvg } from "./assets/webp/deathmetalstill.webp";
import { default as deathmetalstillwebp } from "./assets/webp/deathmetalstill.webp";

export const skills = [
  "python",
  "javascript",
  "react",
  "nodejs",
  "html",
  "css",
  "jest",
  "sqlite3",
  "mongodb",
  "knex",
  "redux",
];

export const projects = [
  {
    name: "The Rotation",
    link: "",
    repo: "",
    body:
      "The Rotation is start up operational nationwide known as the 'rent the runway' for men. The company offer 120+ cutting edge brands such as Rhude, Ksubi, and John Elliott. I helped build out the stripe api integration, embedded search functionality and their core catalog display",
    tech: ["React", "Ruby on Rails", "Python", "Stripe API", "FuseJS"],
    gif: {
      src: rotationwebp,
      fallback: rotationsvg,
      alt: "Exploding Calculator",
      class: "object-none w-full bg-black",
    },
    img: {
      src: rotationwebp,
      fallback: rotationsvg,
      alt: "Model wearing designer clothing",
      class: "object-left-top	",
    },
  },
  {
    name: "Death Metal Calculator",
    link: "https://death-metal-math.vercel.app/",
    repo: "https://github.com/davidgoldcode/DeathMetalMath",
    body:
      "The simple calculator: a rite of passage in a new developer’s portfolio but with a hardcore twist 🤘",
    tech: ["React", "Material UI", "Create React App"],
    gif: {
      src: deathmetalgif,
      fallback: deathmetalwebp,
      alt: "Exploding Calculator",
      class: "object-none w-full bg-black",
    },
    img: {
      src: deathmetalstillwebp,
      fallback: deathmetalstillwebp,
      alt: "Exploding Calculator",
      class: "object-none w-full bg-black",
    },
  },
];

// const social = [
//   {
//     comp: <AiFillGithub />,
//     name: "Github",
//     link: "https://github.com/davidgoldcode",
//   },
//   {
//     comp: <AiOutlineMail />,
//     name: "Mail",
//     link: "mailto:davidgold@hey.com",
//   },
//   {
//     comp: <AiOutlineTwitter />,
//     name: "Twitter",
//     link: "https://twitter.com/davidigold",
//   },
//   {
//     comp: <AiFillMediumSquare />,
//     name: "Medium",
//     link: "https://golddavid.medium.com/",
//   },
//   {
//     comp: <AiFillLinkedin />,
//     name: "LinkedIn",
//     link: "https://www.linkedin.com/in/davidigold/",
//   },
// ];
