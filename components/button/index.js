import React from 'react'

export const Button = ({ className, onMouseEnter, onMouseLeave, children }) => {
    return (
        <button
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            className={className}
        >
            {children}
        </button>
    )
}
