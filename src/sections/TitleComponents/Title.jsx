import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

export const Title = ({ title }) => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  return (
    <h2 className="text-center pb-[64px] xl:pb-[128px] " data-aos="fade-up">
      {title}
    </h2>
  );
};

//mb-3??
