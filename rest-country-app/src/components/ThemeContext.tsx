import { createContext, useContext } from "react"
// import { ThemeContext } from "styled-components";

const themes = {
    light: {background: '#ffffff'},
    dark: {background: '#000000'}
}

const themeContext = createContext(themes);

export const useThemeContext = () => useContext(themeContext);