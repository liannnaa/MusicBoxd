import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

import Placeholder from '../assets/placeholder.PNG';

const Menu = () => {
    return (
      <div className="menu">
        <div className="menu-box">
            <Link to="/home" className="menu-link">
                <img className="menu-icon" src={Placeholder} alt="home" />
            </Link>
        </div>
        <div className="menu-box">
            <Link to="/profile" className="menu-link">
                <img className="menu-icon" src={Placeholder} alt="profile" />
            </Link>
        </div>
      </div>
    );
};

export default Menu;
