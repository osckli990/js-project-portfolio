import React from "react";

import LinkedInPic from "../../assets/Btn-linkedin.svg";
import StackOverflowPic from "../../assets/Btn-stackoverflow.svg";
import GithubPic from "../../assets/Ic-Github.svg";

export const Links = () => {
  return (
    <div role="navigation" className="flex gap-[32px] mx-auto">
      <a href="www.linkedin.com/in/oscar-kling-liljefors-139474159">
        <img
          src={LinkedInPic}
          alt="Link to LinkedIn"
          className="invert size-[32px]"
        />
      </a>
      <a href="https://github.com/osckli990">
        <img src={GithubPic} alt="Link to Github" className="size-[32px]" />
      </a>
      <a href="https://stackoverflowteams.com/c/technigo/users/691/?tab=profile">
        <img
          src={StackOverflowPic}
          alt="Link to StackOverflow"
          className="invert size-[32px]"
        />
      </a>
    </div>
  );
};
