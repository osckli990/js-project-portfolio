import React from "react";

import { Title } from "../TitleComponents/TitleInWhite";

export const CategorySection = ({ title, data, RenderBox }) => {
  return (
    <section className="bg-black flex flex-col pt-[64px] pb-[64px]">
      <Title title={title} />
      {data.map((category) => (
        <div
          key={category.id}
          className="text-white mx-auto text-16 font-normal mb-[24px]"
        >
          <RenderBox items={category.names} title={category.title} />
        </div>
      ))}
    </section>
  );
};
