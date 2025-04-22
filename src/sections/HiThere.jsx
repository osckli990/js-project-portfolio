import React from "react";
import { Greeting } from "./HiThereComponents/Greeting";
import { Introduction } from "./HiThereComponents/Introduction";
import { Profile } from "./HiThereComponents/Profile";

export const HiThere = () => {
  return (
    <header
      role="presentation"
      aria-label="main presentation"
      className="pr-[16px] pl-[16px]"
    >
      <Greeting />
      <Profile />
      <Introduction />
    </header>
  );
};
