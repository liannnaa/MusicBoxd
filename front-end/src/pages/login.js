import React from 'react';
import './login.css';
import banner from '../assets/banner.svg';
import logo from '../assets/logo.PNG';

const Login = () => {
  return (
    <div className="login">
      <img className="banner" src={banner} alt="banner" />
      <img className="logo" src={logo} alt="logo" />
      <span className="login-1">Login</span>
      <span className="please-sign-in-to-continue">
        Please sign in to continue.
      </span>
      <input className="uname-box" placeholder="Username" type="text" />
      <input className="pw-box" placeholder="Password" type="text" />
      <span className="forgot-password">Forgot Password?</span>
      <button className="login-button">
        <div className="rectangle-5">
          <span className="login-2">Login</span>
        </div>
      </button>
      <span className="dont-have-an-account-please-sign">
        Don’t have an account? Please Sign Up first.
      </span>
    </div>
  );
};
export default Login;