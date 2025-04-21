import React from "react";

import netlifyPic from "../../../assets/Ic-Web.svg";
import githubPic from "../../../assets/Ic-Github.svg";

export const Links = ({ netlf, github }) => {
  return (
    <section>
      <div>
        <a
          href={netlf}
          className="flex items-center bg-black text-white p-1 w-25 rounded-lg text-18 font-medium mb-2"
        >
          <img src={netlifyPic} alt="" className="w-30 h-30 px-3" />
          Live demo
        </a>
      </div>
      <div>
        <a
          href={github}
          className="flex items-center bg-black text-white p-1 w-25 rounded-lg text-18 font-medium"
        >
          <img src={githubPic} alt="" className="w-30 h-30 px-3" />
          View code
        </a>
      </div>
    </section>
  );
};
