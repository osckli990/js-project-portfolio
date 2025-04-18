import React from "react";

import { Title } from "./FeaturedProjectsComponents/Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./FeaturedProjectsComponents/SeeMore";

export const FeaturedProjects = () => {
  return (
    <section>
      <Title />
      <ProjectBox />
      <SeeMore />
    </section>
  );
};
