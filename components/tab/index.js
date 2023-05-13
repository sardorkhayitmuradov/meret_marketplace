import React from 'react'

const Tab = ({ className,onClick, children }) => {
    return (
        <div className={className} onClick={onClick}>{children}</div>
    )
}

export default Tab