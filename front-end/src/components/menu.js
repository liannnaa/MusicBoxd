import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

import Home from '../assets/home.png';
import Profile from '../assets/profile.png';

const Menu = () => {
    return (
      <div className="menu">
        <div className="menu-box">
            <Link to="/home" className="menu-link">
                <img className="menu-icon" src={Home} alt="home" />
            </Link>
        </div>
        <div className="menu-box">
            <Link to="/profile" className="menu-link">
                <img className="menu-icon" src={Profile} alt="profile" />
            </Link>
        </div>
      </div>
    );
};

export default Menu;
