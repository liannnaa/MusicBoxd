import React from 'react';
import { useNavigate } from 'react-router-dom';
import './reviewPage.css';

import Placeholder from "../assets/placeholder.PNG";

const Review = () => {
  const navigate = useNavigate();
  
  const navigateToAlbum = () => {
    navigate("/Album");
  }

  const navigateToProfile = () => {
    navigate("/Profile");
  }

  return (
    <div className="review">
      <img className="review-back" src={Placeholder} alt="arrow" onClick={navigateToAlbum} />
      <div className="review-header">
        <div className="review-left">
            <span className="review-title">
                Album
            </span>
            <span className="review-year">
                2023
            </span>
            <span className="review-sub">
                Give your rating
            </span>
            <div className="review-rate">
                <img className="review-stars" src={Placeholder} alt="stars" />
                <img className="review-heart" src={Placeholder} alt="heart" />
            </div>
        </div>
        <img className="review-cover" src={Placeholder} alt="album" />
      </div>
      <input className="review-input" placeholder="Write down your review..." type="text" />
      <button className="review-button" onClick={navigateToProfile} >
        Publish
      </button>
    </div>
  );
};

export default Review;