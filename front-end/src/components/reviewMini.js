import React from 'react';
import "./reviewMini.css";

import stars from '../assets/stars.svg';
import comment from '../assets/comment.svg';
import arrow from '../assets/arrowRight.svg';

import Placeholder from '../assets/placeholder.PNG';

const Review = () => {
    return (
    <div className='reviewMini'>
        <div className="reviewMini-card">
            <img className="reviewMini-pp" src={Placeholder} alt="pp" />
            <div className="reviewMini-contents">
                <span className="reviewMini-title">
                    Title
                </span>
                <div className="reviewMini-info">
                    <span className="reviewMini-user">
                        Review by{" "}
                        <span className="reviewMini-username">
                            User
                        </span>
                    </span>
                    <img className="reviewMini-stars" src={stars} alt="stars" />
                    <img className="reviewMini-comment" src={comment} alt="comment" />
                    <span className="reviewMini-num">
                        1
                    </span>
                </div>
                <span className="reviewMini-album-review">
                    Album Review
                </span>
                <div className="reviewMini-expand">
                    <span className="reviewMini-read-more">
                        Read More
                    </span>
                    <img className="reviewMini-arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            <img className="reviewMini-album" src={Placeholder} alt="album" />
        </div>
    </div>
  );
};
export default Review;