import React from 'react';
const Button = (props) => {
    return (
        <button className = { props.className } 
                onClick={ (type) => props.onBtnClick(props.type) }>
            { props.type }
        </button>
    )
}

export default Button;