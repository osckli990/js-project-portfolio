import React from "react";

export const Date = ({ date }) => {
  return (
    <div className="flex flex-wrap mt-7 mb-3">
      <p className="block border border-black px-2 py-0.25 mr-1 mb-1 rounded-sm text-16 font-medium">
        {date}
      </p>
    </div>
  );
};
