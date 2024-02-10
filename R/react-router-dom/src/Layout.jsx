import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
Footer
const Layout = () => {
  return (
    <div>
      sk
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout
