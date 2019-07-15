import React from 'react';
import Search from '../Search/Search'
const Header = (props) => {
    return (
        <div className="header">
            <span>{ props.header }</span>
            <Search/>
        </div>
    )
}

export default Header;