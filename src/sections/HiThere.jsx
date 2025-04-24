import React from "react";

import { Greeting } from "./HiThereComponents/Greeting";
import { Introduction } from "./HiThereComponents/Introduction";
import { Profile } from "./HiThereComponents/Profile";
import { SecondGreeting } from "./HiThereComponents/SecondGreeting";

export const HiThere = () => {
  return (
    <header
      role="presentation"
      aria-label="main presentation"
      className="px-[16px] sm:px-[24px] lg:w-[782px] lg:mx-auto sm:text-center motion-preset-fade motion-duration-2000"
    >
      <Greeting />
      <Profile />
      <SecondGreeting />
      <Introduction />
    </header>
  );
};
