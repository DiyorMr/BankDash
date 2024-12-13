import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SideBar from '../components/sidebar/SideBar'
import './Layout.css'

const Layout = ({ children }) => {
  return (
    <div className='layout'>
      <div className="sidebar_component">
        <SideBar />
      </div>
      <div className="main">
        <div className="navbar_component">
          <Navbar />
        </div>
        <div className="childrens">
          {children}
        </div>
      </div>

    </div>
  )
}

export default Layout
