import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/HeaderStyle';

function Header() {

    const [ bgColor, setBgColor ] = useState(true);

    function ChangeBackgroundColor() {
        setBgColor(false);
        console.log("mode dark");
    }

    return (
        <HeaderStyle>
            <Link to="/">
                Home
            </Link>

            <button onClick={ChangeBackgroundColor}>
                dark mode
            </button>
        </HeaderStyle>
    )
}

export default Header
