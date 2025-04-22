import React from "react";

import mywords from "../../data/mywords.json";

import { Image } from "./ArticleBoxComponents/Image";
import { Date } from "./ArticleBoxComponents/Date";
import { Desc } from "../Desc";
import { Link } from "./ArticleBoxComponents/Link";
import { Title } from "../TitleH3";

export const ArticleBox = () => {
  return (
    <>
      {mywords.articles.slice(0, 4).map((article) => (
        <section key={article.id} className="mb-[64px]">
          <Image url={article.image} />
          <Date date={article.date} />
          <article>
            <Title title={article.title} />
            <Desc desc={article.desc} />
          </article>
          <Link link={article.link} />
        </section>
      ))}
    </>
  );
};
