import { useContext, useState } from "react";
import { createGlobalStyle, ThemeContext } from "styled-components";
import { useThemeContext } from "../components/ThemeContext";

// const {useThemeContext} = useContext(ThemeContext);


export const GlobalStyle = createGlobalStyle`
html, body {
    background-color: rgb(233, 231, 231);
    margin: 0;
    padding: 0;

    button {
        cursor: pointer;
    }
    
    img {
        max-width: 100%;
      }
           
      ul {
        width: 80%;
        margin: auto;
        padding: 0;
      }
      
      a {
          color: #000000;
          text-decoration: none;
      }
}
`;