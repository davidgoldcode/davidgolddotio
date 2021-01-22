import React from "react";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { v4 as uuidv4 } from "uuid";
import { projects as data } from "./data";

const style =
  "font-weight: bold; font-size: 30px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)";

function App() {
  console.log("%c Hi, I'm David 👋", style);

  return (
    <>
      <Homepage />
      {data.map((item) => (
        <Projects
          key={uuidv4()}
          name={item.name}
          link={item.link}
          repo={item.repo}
          body={item.body}
          tech={item.tech}
          img={item.img}
          gif={item.gif}
        />
      ))}
      <Contact />
    </>
  );
}

export default App;
