import { createGlobalStyle } from "styled-components";

import { media } from "./Breakpoints";

export const GlobalStyle = createGlobalStyle`
  * {
  font-family: "Poppins", sans-serif;
  font-style: normal;
  line-height: normal;
  color: #000000;
  }

  body {
  margin: 0;
  padding: 0;
  }

  #root {
  width: 100%;
  }

  
  h1 {
  font-size: 52px;
  font-weight: 700;
  }

  h2 {
  font-size: 48px;
  font-weight: 700;
  }

  h3 {
  font-size: 24px;
  font-weight: 500;
  }

  li {
  font-size: 16px;
  font-weight: 400;
  list-style-type: none;
  }

  @media ${media.smalldesktop} {
    h1 {
    font-size: 100px;
    font-weight: 700;
    }

    h2 {
    font-size: 80px;
    font-weight: 700;
    }

    h3 {
    font-size: 30px;
    font-weight: 500;
    }
  }
`;
