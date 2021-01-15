import { default as rotationsvg } from "./assets/original/therotation.svg";
import { default as rotationwebp } from "./assets/webp/therotation.webp";
import { default as rotationgif } from "./assets/original/rotationgif.gif";
import { default as rotationgifwebp } from "./assets/webp/rotationgifwebp.webp";
import { default as deathmetalgif } from "./assets/original/deathmetal.gif";
import { default as deathmetalwebp } from "./assets/webp/deathmetal.webp";
import { default as deathmetalstillsvg } from "./assets/webp/deathmetalstill.webp";
import { default as deathmetalstillwebp } from "./assets/webp/deathmetalstill.webp";
import { default as nbapaintsvg } from "./assets/original/nbapaintwip.svg";
import { default as nbapaintwebp } from "./assets/webp/nbapaintwip.webp";

export const skills = [
  "python",
  "javascript",
  "react",
  "nodejs",
  "flask",
  "ruby on rails",
  "jest",
  "sqlite3",
  "mongodb",
  "knex",
  "redux",
];

export const projects = [
  {
    name: "The Rotation",
    link: "https://therotation.club/",
    repo: "https://therotation.club/",
    body:
      "The Rotation is start up operational nationwide known as the 'rent the runway' for men. The company offer 120+ cutting edge brands such as Rhude, Ksubi, and John Elliott. I helped build out the stripe api integration, embedded search functionality and their core catalog display",
    tech: ["React", "Ruby on Rails", "Python", "Stripe API", "FuseJS"],
    gif: {
      src: "",
      fallback: "",
      alt: "No GIF here rn :( ",
      class: "",
    },
    img: {
      src: rotationwebp,
      fallback: rotationsvg,
      alt: "Model wearing designer clothing",
      class: "object-left-top object-cover",
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
      class: "object-none bg-black",
    },
    img: {
      src: deathmetalstillwebp,
      fallback: deathmetalstillsvg,
      alt: "Exploding Calculator",
      class: "object-none bg-black",
    },
  },
  {
    name: "NBA Paint",
    link: "",
    repo: "",
    body:
      "Building a website for my friends Twitter page which recreates NBA players in Microsoft Paint. Stay tuned for more details",
    tech: ["React", "Styled Components", "Twitter API"],
    gif: {
      src: "",
      fallback: "",
      alt: "",
      class: "",
    },
    img: {
      src: nbapaintwebp,
      fallback: nbapaintsvg,
      alt: "NBA Paint Homepage",
      class: "object-cover",
    },
  },
];
