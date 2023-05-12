import React from 'react'

const Table = ({ className, children }) => {
    return (
        <table className={`w-full align-middle ${className}`}>
            {children}
        </table>
    )
}

export default Table