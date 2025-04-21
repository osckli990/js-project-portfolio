import React from "react";

export const Tags = ({ tags }) => {
  return (
    <div>
      <ul className="flex flex-wrap mt-7 mb-3">
        {tags.map((tag, index) => (
          <li
            className="border border-black px-2 py-0.25 mr-1 mb-1 rounded-sm"
            key={index}
          >
            {tag}
          </li>
        ))}
      </ul>
    </div>
  );
};
