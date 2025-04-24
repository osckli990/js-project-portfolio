import React from "react";

export const Greeting = () => {
  return (
    <div className="text-center" tabIndex={1}>
      <h3 className="pt-[64px] xl:pt-[128px]">Hi there! I'm</h3>
      <h1 className="pt-[16px]">Oscar Liljefors</h1>
      <h3 className="pt-[16px] sm:hidden">
        Web developer with a background in gardening, healthcare, and
        3D-printing
      </h3>
    </div>
  );
};
