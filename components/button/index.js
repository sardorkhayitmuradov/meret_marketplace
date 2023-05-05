import React from 'react'

export const Button = ({ className , children }) => {

    return (
        <button className={className}>{children}</button>
    )
}
