import React from "react";

import { Title } from "./TitleComponents/Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./SeeMoreComponent/SeeMore";

export const FeaturedProjects = () => {
  return (
    <section className="py-[64px] xl:py-[128px] px-[16px] lg:px-[24px] xl:px-[128px] sm:px[24px] xl:w-full  mx-auto">
      <Title title="Featured Projects" />
      <ProjectBox />
      <SeeMore />
    </section>
  );
};
