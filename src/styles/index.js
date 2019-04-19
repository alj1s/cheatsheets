// @flow
import { createGlobalStyle } from "styled-components";
import "typeface-roboto";

export const GlobalStyle = createGlobalStyle`
* {
 box-sizing: border-box;
 }

 body {
   font-size: 18px;
   font-family: 'Roboto', sans-serif;
   margin: 0;
   padding: 0;
 }
`;
