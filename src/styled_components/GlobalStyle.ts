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

  /* For some reason it does not work if not set to 100% here as global value */
  /* Also setting slick settings to a clean state, mostly */
  .slick-list, .slick-slider, .slight-slide, .slick-list div {
    height: 100%;
  } 

  .slick-next:before, .slick-prev:before {
    content: none;
  }

  .slick-prev {
    left: 10px; /* Adjust to move the previous arrow */
    z-index: 1;

  }

  .slick-next {
    right: 10px; /* Adjust to move the next arrow */
    z-index: 1;
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
