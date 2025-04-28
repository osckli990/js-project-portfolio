import React, { useState } from "react";

import { Title } from "./TitleComponents/Title";
import { ProjectBox } from "./FeaturedProjectsComponents/ProjectBox";
import { SeeMore } from "./SeeMoreComponent/SeeMore";

export const FeaturedProjects = () => {
  let [articles, setArticles] = useState(4);

  const handleClick = () => {
    setArticles(articles + 4);
  };

  return (
    <section className="py-[64px] xl:py-[128px] px-[16px] lg:px-[24px] xl:px-[128px] sm:px-[24px] xl:w-full mx-auto">
      <Title title="Featured Projects" />
      <ProjectBox load={articles} />
      {articles === 4 && <SeeMore onClick={handleClick} />}
    </section>
  );
};

// question ? do this : else this
//articles === 4 ? <seeMore/> : null

//question && do this
//articles === 4 && <seeMore/>

//ternary operator but tweaked when it should do nothing if false
