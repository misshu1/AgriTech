import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

body {
    font-family: 'Montserrat', sans-serif;
}
`;
