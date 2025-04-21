import React from "react";

import linkPic from "../../../assets/Ic-Web.svg";

export const Link = ({ link }) => {
  return (
    <div>
      <a
        href={link}
        className="flex items-center bg-black text-white p-1 w-25 rounded-lg text-18 font-medium mb-2"
      >
        <img src={linkPic} alt="" className="w-30 h-30 px-3" />
        Read article
      </a>
    </div>
  );
};
