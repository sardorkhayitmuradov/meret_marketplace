import React from 'react';

const Tabledata = ({ className, text, children }) => {
    return <td className={className}>{typeof text === "string" ? text : children}</td>
};

export default Tabledata;