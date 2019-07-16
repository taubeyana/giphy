import React from 'react';
import Search from '../Search/Search';
import './Header.scss';
const Header = (props) => {
    return (
        <div className={ props.className }>
            <span className= {props.className + '-text'} >{ props.header }</span>
            <Search/>
        </div>
    )
}

export default Header;