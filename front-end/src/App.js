import './App.css';
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import OnBoarding from './pages/onBoarding';
import Login from './pages/login';
import SignUp from './pages/signUp';
import Homepage from './pages/homepage';
import Profile from './pages/profile';
import Album from './pages/album';
import Reviewpage from './pages/reviewPage';
import FriendReview from './pages/friendReviews';
import List from './pages/list';
import Comment from './pages/comment';
import Albums from './pages/albums';
import Lists from './pages/lists';
import UserReview from './pages/userReviewed';
import UserAlbums from './pages/userAlbums';
import UserLists from './pages/userLists';
import ToListen from './pages/toListen';
import Hearts from './pages/hearts';
import FullReview from './pages/fullReview';
import FullComment from './pages/fullComment';

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
          <Route path="/Review" element={<Reviewpage />} />
          <Route path="/List" element={<List />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/Albums" element={<Albums />} />
          <Route path="/Lists" element={<Lists />} />
          <Route path="/FriendReviews" element={<FriendReview />} />
          <Route path="/UserReviews" element={<UserReview />} />
          <Route path="/UserAlbums" element={<UserAlbums />} />
          <Route path="/UserLists" element={<UserLists />} />
          <Route path="/ToListen" element={<ToListen />} />
          <Route path="/Hearts" element={<Hearts />} />
          <Route path="/FullReview" element={<FullReview />} />
          <Route path="/FullComment" element={<FullComment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
