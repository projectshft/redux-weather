import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }
  body {
    font-family: 'Roboto', sans-serif;
    width: 100%;
    color: #48484A;
  }
  h1 {
    color: #EC6E4C; 
    font-weight: lighter; 
  }

`;

export default GlobalStyle;
