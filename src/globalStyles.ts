import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --color-background: #051d3b;
    --color-primary-lighter: #051d3b;
    --color-primary-light: #916bea;
    --color-primary: #8257e5;
    --color-primary-dark: #774dd6;
    --color-primary-darker: #6842c2;
    font-size: 60%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--color-background);
    font-family: 'Inter', sans-serif;
  }
  
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
