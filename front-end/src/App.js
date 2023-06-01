import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import OnBoarding from './pages/onBoarding';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Homepage from './pages/homepage';
import Profile from './pages/profile';
import Album from './pages/album';
import Artist from './pages/artist';
import Reviewpage from './pages/reviewPage';
import FriendReview from './pages/friendReviews';
import RecentlyListened from './pages/recentListened';
import RecentlyReviewed from './pages/recentReviewed';
import List from './pages/list';
import Comment from './pages/comment';
import Albums from './pages/albums';

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
          <Route path="/Album" element={<Album />} />
          <Route path="/Artist" element={<Artist />} />
          <Route path="/Review" element={<Reviewpage />} />
          <Route path="/List" element={<List />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/FriendReviews" element={<FriendReview />} />
          <Route path="/RecentlyListened" element={<RecentlyListened />} />
          <Route path="/RecentlyReviewed" element={<RecentlyReviewed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
