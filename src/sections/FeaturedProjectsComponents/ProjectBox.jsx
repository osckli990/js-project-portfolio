import React from "react";

import projects from "../../data/projects.json";

import { Image } from "./ProjectBoxComponents/Image";
import { Tags } from "./ProjectBoxComponents/Tags";
import { Desc } from "./ProjectBoxComponents/Desc";
import { Links } from "./ProjectBoxComponents/Links";

export const ProjectBox = () => {
  return (
    <>
      {projects.projects.slice(0, 4).map((project) => (
        <section key={project.id}>
          <Image url={project.image} />
          <Tags tags={project.tags} />
          <Desc title={project.name} desc={project.desc} />
          <Links netlf={project.netlify} github={project.github} />
        </section>
      ))}
    </>
  );
};

//only show four items at first, then load four more. State?
