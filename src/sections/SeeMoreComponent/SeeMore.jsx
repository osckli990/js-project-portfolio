import React from "react";
import styled from "styled-components";

import seeMore from "../../assets/Ic-ArrowDown.svg";

const StyledSeeMore = styled.button`
  padding: 0px 16px;
  background-color: white;
  color: black;
  border: 2px outset black;
  text-decoration: none;
  border-radius: 12px;
  cursor: pointer;
  margin: 0 auto;
  transition: 0.3s linear;
  display: flex;
  font-weight: 500;
  font-size: 18px;
  height: 48px;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const SeeMore = ({ text = "See more projects" }) => {
  return (
    <StyledSeeMore>
      <img
        src={seeMore}
        alt="down-arrow icon"
        aria-label="presentation"
        className="mr-[16px] size-[30px]"
      />
      {text}
    </StyledSeeMore>
  );
};

//a styled component. do i like them? i think not

//should be a part of a lower component hierarchy
