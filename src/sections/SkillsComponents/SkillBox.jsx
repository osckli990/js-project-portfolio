import React from "react";

export const SkillBox = ({ skill, title }) => {
  return (
    <>
      <p className="text-inherit text-center border border-solid rounded-md block">
        {title}
      </p>
      {skill.map((skill) => {
        return <li className="text-inherit pb-0.25">{skill}</li>;
      })}
    </>
  );
};
