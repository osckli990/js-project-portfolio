import React from "react";

import linkPic from "../../../assets/Ic-Web.svg";

export const Link = ({ link }) => {
  return (
    <div role="navigation">
      <a
        href={link}
        className="flex items-center bg-black text-white text-18 font-medium py-0 px-[16px] rounded-[16px] h-[48px] w-[270px] lg:w-[303px] hover:underline"
      >
        <img src={linkPic} alt="" className="size-[30px] mr-[16px]" />
        Read article
      </a>
    </div>
  );
};

/*w-[302px] when in larger screens*/
