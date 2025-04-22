import React from "react";

import { Title } from "./TitleInWhite";
import { Image } from "./LetsTalkComponents/Image";
import { Info } from "./LetsTalkComponents/Info";
import { Links } from "./LetsTalkComponents/Links";

export const LetsTalk = () => {
  return (
    <section className="bg-black flex flex-col gap-y-4 pt-14 pb-14 pl-4 pr-4 text-white">
      <Title title="Let's Talk" />
      <Image />
      <Info />
      <Links />
    </section>
  );
};
