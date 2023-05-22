import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import OnBoarding from './pages/onBoarding';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Homepage from './pages/homepage';
import Profile from './pages/profile';
import Musicpage from './pages/musicPage';
import Reviewpage from './pages/reviewPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoarding />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Home" element={<Homepage />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Music" element={<Musicpage />} />
          <Route path="/Review" element={<Reviewpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
