import React from "react";

import { Title } from "./FeaturedProjectsComponents/Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./FeaturedProjectsComponents/SeeMore";

export const FeaturedProjects = () => {
  return (
    <section className="pb-14 pt-14 pl-4 pr-4">
      <Title />
      <ProjectBox />
      <SeeMore />
    </section>
  );
};
