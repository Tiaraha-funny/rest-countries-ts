import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/HeaderStyle';
import { GlobalContext } from './GlobalContext';

function Header({ }) {
    function ChangeBackgroundColor () {
        console.log('change');
        
    }

    return (
        <HeaderStyle>
            <Link to="/">
                Where in the world ?
            </Link>

            <button onClick={ChangeBackgroundColor}>
                dark mode
            </button>
        </HeaderStyle>
    )
}

export default Header
