import React from "react";

import { Title } from "./Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./SeeMore";

export const FeaturedProjects = () => {
  return (
    <section className="pb-14 pt-14 pl-4 pr-4">
      <Title title="Featured Projects" />
      <ProjectBox />
      <SeeMore />
    </section>
  );
};
