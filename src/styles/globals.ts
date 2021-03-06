import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --background: #f0f2f5;
  --shape: #FFFFFF;

  --green: #33CC95;
  --red: #E52E4D;
  --blue: #5429cc;

  --blue-light: #6933FF;

  --text-title: #363F5F;
  --text-body: #969CB3;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1080px) {
    font-size: 93.75%;
  }
  @media (max-width: 720px) {
    font-size: 87.5%;
  }
}

body {
  background-color: var(--background);
  -webkit-font-smoothing: antialiased;
}

body, button, input, textarea {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}

h2, h3, h4, h5, h6 {
  font-weight: 600;
}

h1, strong{
  font-weight: 700;
}

button {
  cursor: pointer;
}

[disabled] {
  opacity: 0.6;
  cursor: not-allowed;
}
`;
