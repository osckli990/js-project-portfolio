import React from "react";
import styled from "styled-components";

import seeMore from "../../assets/Ic-ArrowDown.svg";

const StyledSeeMore = styled.button`
  padding: 1px 6px;
  background-color: white;
  color: black;
  border: 1px outset black;
  text-decoration: none;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  margin: 15px auto;
  transition: background-color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

export const SeeMore = () => {
  return (
    <StyledSeeMore>
      <img src={seeMore} alt="down arrow icon" aria-label="presentation" />
      See more projects
    </StyledSeeMore>
  );
};

//a styled component. do i like them? i think not
