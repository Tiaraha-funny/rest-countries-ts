import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components';
import { GlobalContext } from './GlobalContext';

function Header() {

    const { bgColor } = useContext(GlobalContext);

    const styleBody = createGlobalStyle`
html, body {
    background-color: {`${bgColor ? "light-gray" : "white"}`}
}
`;

    return (
        <header>
            <Link to="/">
                Home
            </Link>

            <Link to="/dark-mode">
               <button onClick={changeBgColor}> Dark mode</button>
            </Link>
        </header>
    )
}

export default Header
