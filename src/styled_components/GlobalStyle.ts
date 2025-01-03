import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    --orange-color: rgb(197, 128, 0);
    --dark-orange-color: rgb(133, 86, 0);
  }

  /* This height is set for development, maybe remove later */
  html, body, #root, .App {
    height: 100%;
  }

  a {
    text-decoration: none;
  }


  .material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
  }
`;

export default GlobalStyle;
