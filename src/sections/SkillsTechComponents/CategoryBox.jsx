import React from "react";

export const CategoryBox = ({ title, items }) => {
  return (
    <>
      <p className="text-white text-center border border-solid rounded-md block mb-[16px] h-[28px] w-[177px]">
        {title}
      </p>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-white text-center xl:text-left">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
