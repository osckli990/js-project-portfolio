import React from "react";
import { Greeting } from "./HiThere/Greeting";
import { Introduction } from "./HiThere/Introduction";
import { Profile } from "./HiThere/Profile";

export const HiThere = () => {
  return (
    <header>
      <Greeting />
      <Introduction />
      <Profile />
    </header>
  );
};
