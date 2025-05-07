import React, { useEffect } from "react";

import projects from "../../data/projects.json";

import { Image } from "./ProjectBoxComponents/Image";
import { Tags } from "./ProjectBoxComponents/Tags";
import { Desc } from "../DescComponent/Desc";
import { Links } from "./ProjectBoxComponents/Links";
import { Title } from "../TitleComponents/TitleH3";

import AOS from "aos";
import "aos/dist/aos.css";

export const ProjectBox = ({ load }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  console.log(load);

  return (
    <>
      {projects.projects.slice(0, load).map((project, index) => (
        <section
          key={project.id}
          className="mb-[64px] xl:mb-[128px] xl:grid xl:grid-cols-2 xl:items-center xl:gap-[125px]"
          data-aos="fade-up"
        >
          <Image index={index} url={project.image} />
          <section className="">
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
