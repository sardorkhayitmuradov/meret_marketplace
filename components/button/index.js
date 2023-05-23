import React from 'react'

export const Button = ({ className, onMouseEnter, onMouseLeave,onClick, children }) => {
    return (
        <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
            className={className}
        >
            {children}
        </button>
    )
}
