import React from "react";

export const TechBox = ({ tech, title }) => {
  return (
    <>
      <p className="text-inherit text-center border border-solid rounded-md block">
        {title}
      </p>
      {tech.map((tech) => {
        return <li className="text-inherit pb-0.25">{tech}</li>;
      })}
    </>
  );
};
