import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  &:focus {
    outline: 0;
  }

  body {
    -webkit-font-smoothing: antialiased !important
  }

  body, input, button, select {
    font-family: 'Ubuntu', sans-serif;
    font-size: 14px;

  }

  html,body, #root {
    height: 100%;
    background: #ddd;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  h1,h2,h3 {
    color: #322153;
  }
`;
