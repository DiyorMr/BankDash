import React, { useEffect, useState } from "react";
import "./Navbar.css";
import search from "../../img/search.svg";
import setting from "../../img/settings 1.svg";
import notific from "../../img/cimg.svg";
import user from "../../img/girl.svg";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [title, setTitle] = useState('')

  useEffect(() => {
    navTitleFunc(location.pathname)
  }, [location]);

  const navTitleFunc=(loc)=>{
    switch (loc) {
      case '/':
        setTitle('Overview')
        break;
      case '/transactions':
        setTitle('Transactions')
        break;
      case '/account':
        setTitle('Accounts')
        break;
      case '/invest':
        setTitle('Investments')
        break;
      case '/credit':
        setTitle('Credit Cards')
        break;
      case '/loans':
        setTitle('Loans')
        break;
      case '/services':
        setTitle('Services')
        break;
      case '/myprivil':
        setTitle('My Privileges')
        break;
      case '/settings':
        setTitle('Setting')
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="navbar">
      <div>
        <h1 className="navbar_title">{title}</h1>
      </div>
      <div className="navbar_info">
        <div className="navbar_search">
          <img src={search} alt="img" />
          <input
            className="navbar_search_input"
            type="text"
            placeholder="Search for something"
          />
        </div>
        <div className="navbar_icon">
          <img className="navbar_icon_img" src={setting} alt="setting" />
        </div>
        <div className="navbar_icon">
          <img className="navbar_icon_img" src={notific} alt="notific" />
        </div>
        <img className="navbar_icon_user" src={user} alt="user" />
      </div>
    </div>
  );
};

export default Navbar;
