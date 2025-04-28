import React from "react";

export const Image = ({ index, url }) => {
  const orderClass = index % 2 === 0 ? "xl:order-first" : "xl:order-last";

  return (
    <figure className={`${orderClass} `}>
      <img
        src={url}
        alt="Image of project"
        aria-label="Image of project"
        className="bg-cover bg-center bg-no-repeat sm:h-full rounded-[12px] xl:w-[749px] border-none"
      />
    </figure>
  );
};

//object-fill self-stretch
