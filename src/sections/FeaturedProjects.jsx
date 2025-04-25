import React from "react";

import { Title } from "./TitleComponents/Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./SeeMoreComponent/SeeMore";

let load = 4;

export const FeaturedProjects = () => {
  const handleSeeMoreClick = () => {
    console.log("Clicked");
    load += 4;
    console.log(load);
  };

  return (
    <section className="py-[64px] xl:py-[128px] px-[16px] lg:px-[24px] xl:px-[128px] sm:px[24px] xl:w-full mx-auto">
      <Title title="Featured Projects" />
      <ProjectBox load={load} />
      <SeeMore onClick={handleSeeMoreClick} />
    </section>
  );
};
