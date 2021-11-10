import React from "react";
import '../styles/button.scss';

export function Button ({ type,className,onClick,id }) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            id={id}
        >  
        </button>

    );
}
