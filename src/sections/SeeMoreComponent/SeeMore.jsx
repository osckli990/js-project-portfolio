import React from "react";
import styled from "styled-components";

import seeMore from "../../assets/Ic-ArrowDown.svg";
import { media } from "../../Breakpoints";

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

  @media ${media.smalldesktop} {
    margin-top: 64px;
  }
`;

const StyledImg = styled.img`
  margin-right: 16px;
  height: 30px;
  width: 30px;
`;

export const SeeMore = ({ text = "See more projects", onClick }) => {
  return (
    <StyledSeeMore
      aria-label="button to more projects"
      onClick={onClick}
      data-aos="fade-up"
    >
      <StyledImg
        src={seeMore}
        alt="down-arrow icon"
        aria-label="presentation"
      />
      {text}
    </StyledSeeMore>
  );
};

//a styled component. do i like them? i think not
