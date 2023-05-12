import React from 'react'

const Tablehead = ({className, title , children}) => {
  return (
      <th className={className}>{title? title: children}</th>
  )
}

export default Tablehead