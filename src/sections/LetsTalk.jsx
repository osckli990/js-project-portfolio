import React from "react";

import { Title } from "./LetsTalkComponents/Title";
import { Image } from "./LetsTalkComponents/Image";
import { Info } from "./LetsTalkComponents/Info";
import { Links } from "./LetsTalkComponents/Links";

export const LetsTalk = () => {
  return (
    <section className="bg-black flex flex-col gap-y-[64px] py-[64px] px-[16px]">
      <Title title="Let's Talk" className="mb-0" />
      <Image />
      <Info />
      <Links />
    </section>
  );
};
