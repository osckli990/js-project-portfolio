import React from "react";
import styled from "styled-components";

const StyledSeeMore = styled.button`
  padding: 10px 20px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #357ab8;
  }
`;

export const SeeMore = () => {
  return <StyledSeeMore>See More</StyledSeeMore>;
};

//a styled component
