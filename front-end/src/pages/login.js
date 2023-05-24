import React from 'react';
import './login.css';

import banner from '../assets/login.svg';
import logo from '../assets/logo.PNG';

const Login = () => {
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
      <span className="login-link">
        Forgot Password?
      </span>
      <button className="login-button">
          <span className="login-button-text">
            Login
          </span>
      </button>
      <span className="login-exit">
        Don’t have an account? Please Sign Up first.
      </span>
    </div>
  );
};
export default Login;