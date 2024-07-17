import React, { Children } from 'react'

const Layout = ({children}) => {
  return (
    <div className='mt-24 px-16'>{children}</div>
  )
}

export default Layout