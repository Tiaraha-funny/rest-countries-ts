import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles/HeaderStyle';
import { GlobalContext } from './GlobalContext';

function Header() {

    // const {ChangeBackgroundColor} = useContext(GlobalContext)
    function ChangeBackgroundColor () {}

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
