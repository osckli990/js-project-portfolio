import React from "react";

export const Image = ({ url }) => {
  return (
    <figure>
      <img src={url} alt="Image of project" aria-label="Image of project" />
    </figure>
  );
};
