import React from "react";

import { Title } from "./TitleComponents/Title";
import { ArticleBox } from "./MyWordsComponents/ArticleBox";
import { SeeMore } from "./SeeMoreComponent/SeeMore";

export const MyWords = () => {
  return (
    <section className="py-[64px] xl:py-[128px] px-[24px] xl:px-[128px] font-normal xl:flex xl:flex-col justify-center items-center">
      <Title title="My Words" />
      <ArticleBox />
      <SeeMore text="See more articles" />
    </section>
  );
};
