import React from 'react';
import "./reviewMini.css";

import stars from '../assets/stars.svg';
import comment from '../assets/comment.svg';
import arrow from '../assets/arrowRight.svg';

import Placeholder from '../assets/placeholder.PNG';

const Review = () => {
    return (
    <div className='review'>
        <div className="review-card">
            <img className="review-pp" src={Placeholder} alt="pp" />
            <div className="review-contents">
                <span className="review-title">
                    Title
                </span>
                <div className="review-info">
                    <span className="review-user">
                        Review by{" "}
                        <span className="review-username">
                            User
                        </span>
                    </span>
                    <img className="review-stars" src={stars} alt="stars" />
                    <img className="review-comment" src={comment} alt="comment" />
                    <span className="review-num">
                        1
                    </span>
                </div>
                <span className="review-album-review">
                    Album Review
                </span>
                <div className="review-expand">
                    <span className="review-read-more">
                        Read More
                    </span>
                    <img className="review-arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            <img className="review-album" src={Placeholder} alt="album" />
        </div>
    </div>
  );
};
export default Review;