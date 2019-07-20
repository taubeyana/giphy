import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';


const Gif = (props) => {
    return (
        <div className="giphy__gif" style={{width: props.width + 'px' }}> 
            <div className="giphy__img-wrapper">
                <img className="giphy__img" src = { props.url } alt = { props.title }/>
            </div>
            <span className="giphy__title"> { props.title } </span>
            <div className="giphy__copy-wrapper">
                <FontAwesomeIcon icon={ faCopy }/>
                <span> Copy URL </span>
            </div>
        </div>
    )
}

export default Gif;