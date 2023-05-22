import React from 'react';
import './signUp.css';
import banner from '../assets/banner.svg';
import logo from '../assets/logo.PNG';

const SignUp = () => {
    return (
      <div className="sign-up">
        <img className="banner" src={banner} alt="banner" />
        <img className="logo" src={logo} alt="logo" />
        <span className="sign-up-1">Sign Up</span>
        <span className="create-an-account-to-continue">
          Create an account to continue.
        </span>
        <input className="uname-box" placeholder="Username" type="text" />
        <input className="email-box" placeholder="Email" type="text" />
        <input className="pw-box" placeholder="Password" type="text" />
        <button className="sign-up-button">
          <div className="rectangle-6">
            <span className="sign-up-2">Sign Up</span>
          </div>
        </button>
        <span className="already-have-an-account-go-to-th">
          Already have an account? Go to the Login Page.
        </span>
      </div>
    );
  };
  export default SignUp;
  