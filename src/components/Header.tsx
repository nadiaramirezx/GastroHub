import React from 'react';
import '../styles/Header.css';
import logo from '../assets/img/logo.png';
//import { Link } from 'react-router-dom';//

function Header() {
    return (
      <header className="Navbar">
          <div className="navbar-container">
            {/*logo*/}
            <div className="navbar-brand">
              <img src={logo} alt="logo" className="navbar-logo" />
            </div>
            {/*menu*/}
            <ul className="navbar-list">
            <li className="navbar-item">
              home
              </li>
              <li className="navbar-item">
               about
              </li>
              <li className="navbar-item">
                categorias
              </li>
            <li className="navbar-item">
                <button className="get-started-btn">Login</button>
            </li>
            </ul>
          </div>
        </header>
      )
}

export default Header;


 