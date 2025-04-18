import React from "react";

export const Links = ({ netlf, github }) => {
  return (
    <section>
      <div>
        <a href={netlf} />
      </div>
      <div>
        <a href={github} />
      </div>
    </section>
  );
};
