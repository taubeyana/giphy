import React from 'react';
const Gif = (props) => {
       return (<div className="giphy__gif"> <img src={props.url} alt={props.title}/><span>{props.title}</span></div>)
}

export default Gif;