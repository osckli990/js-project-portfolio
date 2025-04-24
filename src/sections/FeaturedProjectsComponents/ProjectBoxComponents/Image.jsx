import React from "react";

export const Image = ({ url }) => {
  return (
    <figure className="xl:ml-[128px]">
      <img
        src={url}
        alt="Image of project"
        aria-label="Image of project"
        className="object-fill self-stretch rounded-[12px] w-<100> h-<100> xl:w-[749px]"
      />
    </figure>
  );
};
