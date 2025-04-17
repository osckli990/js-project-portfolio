import React from "react";

import tech from "../data/tech.json";

import { SkillBox } from "./TechComponents/Skillbox";
import { Title } from "./TechComponents/Title";

export const Tech = () => {
  return (
    <section className="bg-black w-xl container">
      <div className="text-white">
        <Title />
        {tech.tech.map((category) => (
          <SkillBox
            key={category.id}
            tech={category.names}
            title={category.title}
          />
        ))}
      </div>
    </section>
  );
};
