import React from "react";

export const Image = ({ url }) => {
  return (
    <figure>
      <img
        src={url}
        alt="Image of article"
        aria-label="Image of article"
        className="h-[200px] w-full sm:w-[200px] sm:h-full self-stretch rounded-[12px]"
      />
    </figure>
  );
};
