import React from "react";

export const Image = ({ url }) => {
  return (
    <figure className="xl:flex xl:justify-end xl:h-full xl:pr-[125px]">
      <img
        src={url}
        alt="Image of article"
        aria-label="Image of article"
        className=" bg-cover bg-center bg-no-repeat sm:h-full rounded-[12px] xl:w-[479px] "
      />
    </figure>
  );
};
