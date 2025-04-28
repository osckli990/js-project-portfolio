/*
import React from "react";

import tech from "../data/tech.json";

import { TechBox } from "./TechComponents/TechBox";
import { Title } from "./TitleInWhite";

export const Tech = () => {
  return (
    <section className="bg-black flex flex-col pt-[64px] pb-[64px]">
      <Title title="Tech" />
      {tech.tech.map((category) => (
        <div className="text-white w-1/2 mx-auto text-16 font-normal mb-[24px]">
          <TechBox
            key={category.id}
            tech={category.names}
            title={category.title}
          />
        </div>
      ))}
    </section>
  );
};
*/

import React from "react";

import tech from "../data/tech.json";

import { CategorySection } from "./SkillsTechComponents/CategorySection";
import { CategoryBox } from "./SkillsTechComponents/CategoryBox";

export const Tech = () => (
  <CategorySection
    title="Tech"
    data={tech.tech}
    RenderBox={({ title, items }) => (
      <CategoryBox title={title} items={items} />
    )}
  />
);
