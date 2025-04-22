import React from "react";

export const Image = ({ url }) => {
  return (
    <figure>
      <img
        src={url}
        alt="Image of project"
        aria-label="Image of project"
        className="self-stretch rounded-[12px] w-100 h-[479px]"
      />
    </figure>
  );
};
