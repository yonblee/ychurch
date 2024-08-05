import React from 'react'
import Navigation from './navigation'
import Sidebar from './sidebar'

function Layout({children}) {
  return (
    <>
      <Navigation />
      <Sidebar/>
      <main>{children}</main>
    </>
  )
}

export default Layout