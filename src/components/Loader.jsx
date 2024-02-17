import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import { render } from 'react-dom';

function Loader() {
    return (
        <div className="loader">
            <RotatingLines
                strokeColor="#475569"
                strokeWidth="2"
            />
        </div>
    )
}

export default Loader;