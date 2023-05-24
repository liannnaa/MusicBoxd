import React from 'react';
import './onBoarding.css';

import header from "../assets/start.svg";
import logo from "../assets/logo.PNG";

const OnBoarding= (props) => {
  return (
    <div className="on-boarding">
      <img className="on-boarding-header" src={header} alt="header"/>
      <img className="on-boarding-logo" src={logo} alt="logo"/>
      <span className="on-boarding-intro">
        “Track music you’ve listened to. Save those you want to see. Tell your
        friends what’s good.”
      </span>
      <button className="on-boarding-button">
        Get Started
      </button>
    </div>
  );
};

export default OnBoarding;