import React from "react";

import skills from "../data/skills.json";

import { SkillBox } from "./SkillsComponents/SkillBox";
import { Title } from "./TitleInWhite";

export const Skills = () => {
  return (
    <section className="bg-black container flex flex-col gap-y-4 pt-14 pb-14">
      <Title title="Skills" />
      {skills.skills.map((category) => (
        <div className="text-white w-1/2 mx-auto">
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
