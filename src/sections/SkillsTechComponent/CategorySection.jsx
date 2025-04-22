import React from "react";

import { Title } from "../TitleInWhite";

export const CategorySection = ({ title, data, RenderBox }) => {
  return (
    <section className="bg-black flex flex-col pt-[64px] pb-[64px]">
      <Title title={title} />
      {data.map((category) => (
        <div
          key={category.id}
          className="text-white w-1/2 mx-auto text-16 font-normal mb-[24px]"
        >
          <RenderBox items={category.names} title={category.title} />
        </div>
      ))}
    </section>
  );
};
