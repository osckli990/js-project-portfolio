import React from "react";

export const Image = ({ url }) => {
  return (
    <figure>
      <img
        src={url}
        alt="Image of article"
        aria-label="Image of article"
        className="h-[200px] w-100 self-stretch rounded-[12px]"
      />
    </figure>
  );
};
