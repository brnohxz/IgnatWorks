import React from 'react'
import {Link} from 'react-router-dom';

function Header() {
    return (
        <div>

            <Link to={'/junior'}>Junior </Link>
            <Link to={'/234'}>JuniorPlus </Link>

        </div>
    )
}

export default Header
