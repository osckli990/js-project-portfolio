import React from "react";

export const Image = ({ url }) => {
  return (
    <figure>
      <img
        src={url}
        alt="Image of article"
        aria-label="Image of article"
        className="h-200 self-stretch rounded-lg"
      />
    </figure>
  );
};
