import React from 'react';
import { PulseLoader } from 'react-spinners';


export const Loader = () => {
    return (
        <div className="giphy__loader">
            <PulseLoader />
            <span> Loading </span>
        </div>
    )
}