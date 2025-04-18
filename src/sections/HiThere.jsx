import React from "react";
import { Greeting } from "./HiThereComponents/Greeting";
import { Introduction } from "./HiThereComponents/Introduction";
import { Profile } from "./HiThereComponents/Profile";

export const HiThere = () => {
  return (
    <header
      role="presentation"
      aria-label="main presentation"
      className="p-2 pr-4 pl-4"
    >
      <Greeting />
      <Profile />
      <Introduction />
    </header>
  );
};
