import React from "react";

export const TechBox = ({ tech, title }) => {
  return (
    <>
      <p className="text-inherit text-center border border-solid rounded-[4px] block mb-[16px]">
        {title}
      </p>
      {tech.map((tech) => {
        return <li className="text-inherit text-center">{tech}</li>;
      })}
    </>
  );
};
