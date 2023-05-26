import React from 'react';
import { useNavigate } from 'react-router-dom';
import './signUp.css';

import banner from '../assets/login.svg';
import logo from '../assets/logo.PNG';

const SignUp = () => {
  const navigate = useNavigate();
  
  const navigateToProfile = () => {
    navigate("/Profile");
  }
  const navigateToLogin = () => {
    navigate("/Login");
  }

    return (
      <div className="sign-up">
        <img className="sign-up-banner" src={banner} alt="banner" />
        <img className="sign-up-logo" src={logo} alt="logo" />
        <span className="sign-up-title">
          Sign Up
        </span>
        <span className="sign-up-instructions">
          Create an account to continue.
        </span>
        <input className="sign-up-input" placeholder="Username" type="text" />
        <input className="sign-up-input" placeholder="Email" type="text" />
        <input className="sign-up-input" placeholder="Password" type="text" />
        <button className="sign-up-button">
          <span className="sign-up-button-text">
            Sign Up
          </span>
        </button>
        <span className="sign-up-exit">
          Already have an account? Go to the Login Page.
        </span>
      </div>
    );
  };
  export default SignUp;
  