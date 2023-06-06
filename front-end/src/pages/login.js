import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';

import banner from '../assets/login.svg';
import logo from '../assets/logo.PNG';

const Login = () => {
  const navigate = useNavigate();
  
  const navigateToProfile = () => {
    navigate("/Profile");
  }
  const navigateToSignUp = () => {
    navigate("/SignUp");
  }

  return (
    <div className="login">
      <img className="login-banner" src={banner} alt="banner" />
      <img className="login-logo" src={logo} alt="logo" />
      <span className="login-text">Login</span>
      <span className="login-instructions">
        Please sign in to continue.
      </span>
      <input className="login-input" placeholder="Username" type="text" />
      <input className="login-input" placeholder="Password" type="text" />
      <span className="login-password">
        Forgot Password?
      </span>
      <button className="login-button" onClick={navigateToProfile}>
          <span className="login-button-text">
            Login
          </span>
      </button>
      <span className="login-exit">
        Don’t have an account? Please{" "}
        <span className="login-sign-up" onClick={navigateToSignUp}>
          Sign Up
        </span>
        {" "} first.
      </span>
    </div>
  );
};
export default Login;