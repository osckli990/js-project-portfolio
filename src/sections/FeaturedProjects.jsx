import React from "react";

import { Title } from "./TitleComponents/Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./SeeMoreComponent/SeeMore";

export const FeaturedProjects = () => {
  return (
    <section className="py-[64px] px-[16px]">
      <Title title="Featured Projects" />
      <ProjectBox />
      <SeeMore />
    </section>
  );
};
