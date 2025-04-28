import React from "react";

export const Greeting = () => {
  return (
    <div className="text-center" tabIndex="0">
      <h3 className="pt-[64px] xl:pt-[128px]">Hi there! I'm</h3>
      <h1 className="pt-[16px]">Oscar Liljefors</h1>
      <p className="pt-[16px] sm:hidden text-[24px] font-[500] xl:text-[30px]">
        Web developer with a background in gardening, healthcare, and
        3D-printing
      </p>
    </div>
  );
};
