import React from "react";

import { Title } from "./Title";
import { ArticleBox } from "./MyWordsComponents/ArticleBox";
import { SeeMore } from "./SeeMore";

export const MyWords = () => {
  return (
    <section className="py-[64px] px-[24px] font-normal">
      <Title title="My Words" />
      <ArticleBox />
      <SeeMore text="See more articles" />
    </section>
  );
};
