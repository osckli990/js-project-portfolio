import React from "react";

export const Tags = ({ tags }) => {
  return (
    <div>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
};
