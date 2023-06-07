import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./reviewMini.css";

import stars from '../assets/stars.svg';
import comment from '../assets/comment.svg';
import arrow from '../assets/arrowRight.svg';

import Placeholder from '../assets/placeholder.PNG';

const Review = ({review}) => {
    const navigate = useNavigate();

    const navigateToReviews = () => {
        navigate("/FullReview");
    }

    const maxLength = 40;
    const truncate = (input) => {
        if (input.length > maxLength) {
             return input.substring(0, maxLength) + '...';
        }
        return input;
    };

    return (
    <div className='reviewMini'>
        <div className="reviewMini-card" onClick={navigateToReviews} >
            <img className="reviewMini-pp" src={review.profile || Placeholder} alt="pp" />
            <div className="reviewMini-contents">
                <span className="reviewMini-title">
                    {truncate(review.title) || "Album Title"}
                </span>
                <div className="reviewMini-info">
                    <span className="reviewMini-user">
                        Review by{" "}
                        <span className="reviewMini-username">
                            {review.reviewer || "Reviewer"}
                        </span>
                    </span>
                    <img className="reviewMini-stars" src={stars} alt="stars" />
                    <img className="reviewMini-comment" src={comment} alt="comment" />
                    <span className="reviewMini-num">
                        {review.rating || "1"}
                    </span>
                </div>
                <span className="reviewMini-album-review">
                    {truncate(review.review) || "Album Review"}
                </span>
                <div className="reviewMini-expand">
                    <span className="reviewMini-read-more">
                        Read More
                    </span>
                    <img className="reviewMini-arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            <img className="reviewMini-album" src={review.cover || Placeholder} alt="album" />
        </div>
    </div>
  );
};
export default Review;