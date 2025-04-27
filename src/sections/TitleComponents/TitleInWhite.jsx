import React from "react";

import { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Title = ({ title }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <h2 className="text-center text-white mb-[16px]" data-aos="fade-up">
      {title}
    </h2>
  );
};
