import React from "react";

export const Image = ({ url }) => {
  return (
    <figure className="xl:ml-[128px]">
      <img
        src={url}
        alt="Image of project"
        aria-label="Image of project"
        className="bg-cover bg-center bg-no-repeat sm:h-<100> rounded-[12px] xl:w-[749px] "
      />
    </figure>
  );
};

//object-fill self-stretch
