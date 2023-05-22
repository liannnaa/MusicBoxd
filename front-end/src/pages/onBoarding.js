import React from 'react';
import './onBoarding.css';
import header from "../assets/header.svg";
import logo from "../assets/logo.PNG";

const OnBoarding= (props) => {
  return (
    <div className="on-boarding">
      <img className="header" src={header} alt="header"/>
      <img className="logo" src={logo} alt="logo"/>
      <span className="track-music-youve-listened-to-sa">
        “Track music you’ve listened to. Save those you want to see. Tell your
        friends what’s good.”
      </span>
      <button className="button-get-started">
        <div className="rectangle-1">
          <span className="get-started">Get Started</span>
        </div>
      </button>
    </div>
    );
};

export default OnBoarding;