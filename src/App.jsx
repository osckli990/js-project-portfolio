import React from "react";

import { FeaturedProjects } from "./sections/FeaturedProjects";
import { HiThere } from "./sections/HiThere";
import { LetsTalk } from "./sections/LetsTalk";
import { MyWords } from "./sections/MyWords";
import { Skills } from "./sections/Skills";
import { Tech } from "./sections/Tech";
import { GlobalStyle } from "./GlobalStyle";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <HiThere data-aos="fade-up" />
      <Tech data-aos="fade-up" />
      <FeaturedProjects data-aos="fade-up" />
      <Skills data-aos="fade-up" />
      <MyWords data-aos="fade-up" />
      <LetsTalk data-aos="fade-up" />
    </>
  );
};

//App is our main hub for all section and components. the "sandwich"

//add tests
//add accessibility and aria-labels
