import React from "react";

import mywords from "../../data/mywords.json";

import { Image } from "./ArticleBoxComponents/Image";
import { Date } from "./ArticleBoxComponents/Date";
import { Desc } from "../DescComponent/Desc";
import { Link } from "./ArticleBoxComponents/Link";
import { Title } from "../TitleComponents/TitleH3";

export const ArticleBox = () => {
  return (
    <>
      {mywords.articles.slice(0, 4).map((article) => (
        <section
          key={article.id}
          className="mb-[64px] sm:grid sm:grid-cols-2 sm:items-center xl:items-start"
        >
          <Image url={article.image} />
          <section className="sm:pl-[32px] xl:pl-0 h-full sm:flex sm:flex-col sm:justify-center">
            <Date date={article.date} />
            <article>
              <Title title={article.title} />
              <Desc desc={article.desc} />
            </article>
            <Link link={article.link} />
          </section>
        </section>
      ))}
    </>
  );
};
