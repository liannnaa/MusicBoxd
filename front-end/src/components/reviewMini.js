import React from 'react';
import "./reviewMini.css";

import stars from '../assets/stars.svg';
import comment from '../assets/comment.svg';
import arrow from '../assets/arrowRight.svg';

import Placeholder from '../assets/placeholder.PNG';

const Review = () => {
    return (
    <div className='review'>
        <div className="card">
            <img className="review-pp" src={Placeholder} alt="pp" />
            <div className="contents">
                <span className="title">
                    Title
                </span>
                <div className="info">
                    <span className="user">
                        Review by
                        <span className="review-username">
                            User
                        </span>
                    </span>
                    <img className="stars" src={stars} alt="stars" />
                    <img className="comment" src={comment} alt="comment" />
                    <span className="num">
                        1
                    </span>
                </div>
                <span className="album-review">
                    Album Review
                </span>
                <div className="expand">
                    <span className="read-more">
                        Read More
                    </span>
                    <img className="arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            <img className="album" src={Placeholder} alt="album" />
        </div>
    </div>
  );
};
export default Review;