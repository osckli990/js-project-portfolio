import React from "react";

export const SkillBox = ({ tech, title }) => {
  console.log(tech);
  console.log(title);

  return (
    <>
      <p>{title}</p>
      {tech.map((tech) => {
        return <li>{tech}</li>;
      })}
    </>
  );
};
