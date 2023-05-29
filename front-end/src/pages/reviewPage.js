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
        <div className="review-top">
            <img className="review-back" src={Placeholder} alt="arrow" onClick={navigateToAlbum} />
                <span className="review-head">
                    Write Your Review
                </span>
        </div>
        <div className="review-header">
            <div className="review-left">
                <div className="review-name">
                    <span className="review-title">
                        Album
                    </span>
                    <span className="review-year">
                        Year
                    </span>
                </div>
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
        <textarea className="review-input" placeholder="Write down your review..."></textarea>
        <button className="review-button" onClick={navigateToProfile} >
            <span className="review-button-text">
                Publish
            </span>
        </button>
    </div>
  );
};

export default Review;