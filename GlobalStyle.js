import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }

  body {
    background-color: #f9fafb;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
