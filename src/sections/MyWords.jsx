import React from "react";

import { Title } from "./Title";
import { ArticleBox } from "./MyWordsComponents/ArticleBox";
import { SeeMore } from "./SeeMore";

export const MyWords = () => {
  return (
    <section className="pb-14 pt-14 pl-4 pr-4">
      <Title title="My Words" />
      <ArticleBox />
      <SeeMore text="See more articles" />
    </section>
  );
};
