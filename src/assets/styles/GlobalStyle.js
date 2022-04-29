import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @import url(https://fonts.googleapis.com/css?family=Montserrat:400,700);
  @import url(https://fonts.googleapis.com/css?family=Roboto:regular,700);

  html {
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Montserrat', sans-serif;

    margin: 0;
    padding: 0;
  }

  a, button {
    font-family: 'Montserrat', sans-serif;
  }
`
