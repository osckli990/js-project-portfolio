import React from "react";

export const CategoryBox = ({ title, items }) => {
  return (
    <>
      <p className="text-white text-center border border-solid rounded-md block mb-[16px]">
        {title}
      </p>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="text-white text-center pb-1">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
};
