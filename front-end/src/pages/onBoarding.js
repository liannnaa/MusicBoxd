import React from 'react';
import { useNavigate } from 'react-router-dom';
import './onBoarding.css';

import header from "../assets/start.svg";
import logo from "../assets/logo.PNG";

const OnBoarding= () => {
  const navigate = useNavigate();
  
  const navigateToLogin = () => {
    navigate("/Login");
  }

  return (
    <div className="on-boarding">
      <img className="on-boarding-header" src={header} alt="header"/>
      <img className="on-boarding-logo" src={logo} alt="logo"/>
      <span className="on-boarding-intro">
        “Track music you’ve listened to. Save those you want to see. Tell your
        friends what’s good.”
      </span>
      <button className="on-boarding-button" onClick={navigateToLogin} >
        Get Started
      </button>
    </div>
  );
};

export default OnBoarding;