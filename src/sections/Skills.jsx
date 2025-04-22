/*

import React from "react";

import skills from "../data/skills.json";

import { SkillBox } from "./SkillsComponents/SkillBox";
import { Title } from "./TitleInWhite";

export const Skills = () => {
  return (
    <section className="bg-black flex flex-col gap-y-4 pt-14 pb-14">
      <Title title="Skills" />
      {skills.skills.map((category) => (
        <div className="text-white w-1/2 mx-auto text-16 font-normal">
          <SkillBox
            key={category.id}
            skill={category.names}
            title={category.title}
          />
        </div>
      ))}
    </section>
  );
};
*/
import React from "react";

import skills from "../data/skills.json";

import { CategorySection } from "./CategorySection";
import { CategoryBox } from "./CategoryBox";

export const Skills = () => (
  <CategorySection
    title="Skills"
    data={skills.skills}
    RenderBox={({ title, items }) => (
      <CategoryBox title={title} items={items} />
    )}
  />
);
