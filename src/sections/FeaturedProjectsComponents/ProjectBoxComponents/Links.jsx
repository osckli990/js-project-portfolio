import React from "react";

import netlifyPic from "../../../assets/Ic-Web.svg";
import githubPic from "../../../assets/Ic-Github.svg";

export const Links = ({ netlf, github }) => {
  return (
    <section role="navbar" aria-label="links related to project">
      <div>
        <a
          href={netlf}
          className="flex items-center bg-black text-white text-18 font-medium mb-[6px] py-0 px-[16px] rounded-[16px] h-[48px] w-[290px] lg:w-[303px] hover:underline"
        >
          <img src={netlifyPic} alt="" className="size-[30px] mr-[16px]" />
          Live demo
        </a>
      </div>
      <div>
        <a
          href={github}
          className="flex items-center bg-black text-white text-18 font-medium py-0 px-[16px] rounded-[16px] h-[48px] w-[290px] lg:w-[303px] hover:underline"
        >
          <img src={githubPic} alt="" className="size-[30px] mr-[16px]" />
          View code
        </a>
      </div>
    </section>
  );
};

/*w-[303px] in bigger sizes */
