import React from "react";

export const Date = ({ date }) => {
  return (
    <div className="flex flex-wrap mt-[32px] mb-[16px]">
      <p className="border-[2px] border-black px-[6px] py-[2px] mr-[4px] mb-[4px] rounded-[4px] basis-1">
        {date}
      </p>
    </div>
  );
};
