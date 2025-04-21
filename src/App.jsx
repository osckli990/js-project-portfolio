import React from "react";

import { FeaturedProjects } from "./sections/FeaturedProjects";
import { HiThere } from "./sections/HiThere";
import { LetsTalk } from "./sections/LetsTalk";
import { MyWords } from "./sections/MyWords";
import { Skills } from "./sections/Skills";
import { Tech } from "./sections/Tech";

export const App = () => {
  return (
    <>
      <HiThere />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <MyWords />
      <LetsTalk />
    </>
  );
};

//App is our main hub for all section and components. the "sandwich"
