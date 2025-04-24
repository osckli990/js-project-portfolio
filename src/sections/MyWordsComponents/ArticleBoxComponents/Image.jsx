import React from "react";

export const Image = ({ url }) => {
  return (
    <figure>
      <img
        src={url}
        alt="Image of article"
        aria-label="Image of article"
        className="h-[200px] w-full sm:w-[200px] sm:h-full bg-cover bg-center bg-no-repeat sm:h-<100> rounded-[12px] xl:w-[749px]"
      />
    </figure>
  );
};
