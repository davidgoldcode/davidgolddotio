import React from "react";
import { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Projects from "./components/Projects";
import { projects as data } from "./data";

function App() {
  return (
    <>
      <Homepage />
      {data.map((item) => (
        <Projects
          name={item.name}
          link={item.link}
          repo={item.repo}
          body={item.body}
          tech={item.tech}
          img={item.img}
          gif={item.gif}
        />
      ))}
    </>
  );
}

export default App;
