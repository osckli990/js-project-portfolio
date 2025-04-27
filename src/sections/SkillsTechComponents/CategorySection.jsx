import React from "react";

import { Title } from "../TitleComponents/TitleInWhite";

import { useEffect } from "react";

//aos
import AOS from "aos";
import "aos/dist/aos.css";

export const CategorySection = ({ title, data, RenderBox, index }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <section
      className="bg-black flex flex-col pt-[64px] xl:tp-[128px] pb-[64px] xl:pb-[128px] xl:items-center "
      tabIndex={index}
    >
      <Title title={title} />
      <div className="flex flex-col xl:flex-row">
        {data.map((category) => (
          <div
            key={category.id}
            className="text-white mx-auto xl:ml-0 xl:mr-[16px] text-16 font-normal mb-[24px] xl:mb-0"
            data-aos="fade-up"
          >
            <RenderBox items={category.names} title={category.title} />
          </div>
        ))}
      </div>
    </section>
  );
};

//360 - 24
