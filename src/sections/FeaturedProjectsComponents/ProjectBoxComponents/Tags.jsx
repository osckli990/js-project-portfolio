import React from "react";

export const Tags = ({ tags }) => {
  return (
    <div>
      <ul className="flex flex-wrap mt-[32px] sm:mt-[64px] mb-[16px]">
        {tags.map((tag, index) => (
          <li
            className="border-[2px] border-black px-[6px] py-[2px] mr-[4px] mb-[4px] rounded-[4px] basis-1"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
