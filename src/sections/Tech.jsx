import React from "react";

import tech from "../data/tech.json";

import { TechBox } from "./TechComponents/TechBox";
import { Title } from "./TitleInWhite";

export const Tech = () => {
  return (
    <section className="bg-black container flex flex-col gap-y-4 pt-14 pb-14">
      <Title title="Tech" />
      {tech.tech.map((category) => (
        <div className="text-white w-1/2 mx-auto">
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
