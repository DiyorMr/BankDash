import React from 'react'
import './SideBar.css'
import logo from '../../img/card.svg'
import { Link, NavLink } from 'react-router-dom'
import { sideBarMenu } from './data'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <Link to='/' className='logo'>
        <img src={logo} alt="img" />
        <h1 className='logo_title'>BankDash.</h1>
      </Link>
      <div className="sidebar_menu">
        {
          sideBarMenu.map((item, index) =>
            <NavLink className={({ isActive }) => isActive ? 'sidebar_menu_item active' : 'sidebar_menu_item'} to={item.to} key={index}>
              <span className={`icon icon_${item.img}`}></span>
              <span className='title'>{item.title}</span>
            </NavLink>
          )
        }
      </div>
    </div>
  )
}

export default SideBar
