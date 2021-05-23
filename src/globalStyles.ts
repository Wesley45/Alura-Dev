import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
   :root {
    --bg-color: #051D3B;
    --font-color: #FFFFFF;
    --black: #141414;
    --dark-blue: #5081FB14;
    --input-color: #FFFFFF16;
    font-size: 60%;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    background-color: var(--bg-color);
    font-family: 'Inter', sans-serif;
    position: relative;
  }
  
  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }
`;

export default GlobalStyle;
