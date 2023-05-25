import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

import Placeholder from '../assets/placeholder.PNG';

const Menu = () => {
    return (
      <div className="menu-wrapper">
        <div className="menu-box">
          <Link to="/" className="full-size-link">
            <img src={Placeholder} alt="home" />
          </Link>
        </div>
        <div className="menu-box">
          <Link to="/profile" className="full-size-link">
            <img src={Placeholder} alt="profile" />
          </Link>
        </div>
      </div>
    );
};

export default Menu;
