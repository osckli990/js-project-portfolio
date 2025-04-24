import React from "react";

export const Image = ({ url }) => {
  return (
    <figure className="">
      <img
        src={url}
        alt="Image of article"
        aria-label="Image of article"
        className=" bg-cover bg-center bg-no-repeat sm:h-<100> rounded-[12px] xl:w-[479px] "
      />
    </figure>
  );
};
