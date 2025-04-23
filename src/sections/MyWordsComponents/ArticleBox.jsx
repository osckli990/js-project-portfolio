import React from "react";

import mywords from "../../data/mywords.json";

import { Image } from "./ArticleBoxComponents/Image";
import { Date } from "./ArticleBoxComponents/Date";
import { Desc } from "../Desc";
import { Link } from "./ArticleBoxComponents/Link";
import { Title } from "../TitleComponents/TitleH3";

export const ArticleBox = () => {
  return (
    <>
      {mywords.articles.slice(0, 4).map((article) => (
        <section
          key={article.id}
          className="mb-[64px] sm:flex sm:w-[640px] sm:mx-auto"
        >
          <Image url={article.image} />
          <section className="sm:pl-[32px] h-full sm:flex sm:flex-col">
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
