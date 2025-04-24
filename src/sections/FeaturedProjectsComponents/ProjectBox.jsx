import React from "react";

import projects from "../../data/projects.json";

import { Image } from "./ProjectBoxComponents/Image";
import { Tags } from "./ProjectBoxComponents/Tags";
import { Desc } from "../DescComponent/Desc";
import { Links } from "./ProjectBoxComponents/Links";
import { Title } from "../TitleComponents/TitleH3";

export const ProjectBox = () => {
  return (
    <>
      {projects.projects.slice(0, 4).map((project) => (
        <section
          key={project.id}
          className="mb-[64px] xl:mb-[128px] xl:flex xl:items-center"
        >
          <Image url={project.image} />
          <section className="xl:mr-[128px]">
            <Tags tags={project.tags} />
            <article>
              <Title title={project.name} />
              <Desc desc={project.desc} />
            </article>
            <Links netlf={project.netlify} github={project.github} />
          </section>
        </section>
      ))}
    </>
  );
};

//only show four items at first, then load four more. State?
