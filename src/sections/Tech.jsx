import React from "react";

import tech from "./data/tech.json";

import { SkillBox } from "./TechComponents/Skillbox";
import { Title } from "./TechComponents/Title";

export const Tech = () => {
  return (
    <section>
      <Title />
      <SkillBox tech={tech.Basic} title="Basic" />
      <SkillBox tech={tech.Backend} title="Backend" />
      <SkillBox tech={tech.Frontend} title="Frontend" />
      <SkillBox tech={tech.Methods} title="Methods" />
    </section>
  );
};
