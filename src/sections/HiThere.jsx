import React from "react";
import { Greeting } from "./HiThereComponents/Greeting";
import { Introduction } from "./HiThereComponents/Introduction";
import { Profile } from "./HiThereComponents/Profile";

export const HiThere = () => {
  return (
    <header>
      <Greeting />
      <Introduction />
      <Profile />
    </header>
  );
};
