import React from "react";

export const TechBox = ({ tech, title }) => {
  return (
    <>
      <p className="text-inherit text-center">{title}</p>
      {tech.map((tech) => {
        return <li className="text-inherit">{tech}</li>;
      })}
    </>
  );
};
