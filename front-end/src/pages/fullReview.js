import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./fullReview.css";

import Placeholder from '../assets/placeholder.PNG';
import Comment from '../components/commentMini';

const Review = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/Home");
    }
    
    const navigateToComment = () => {
        navigate("/Comment");
    }

    return (
        <div className="full-review">
            <img className="full-review-back" src={Placeholder} alt="arrow" onClick={navigateToHome} />
            <div className="full-review-heading">
                <img className="full-review-cover" src={Placeholder} alt="cover" />
                <div className="full-review-heading-right">
                    <div className="full-review-head">
                        <span className="full-review-title">
                            Album
                        </span>
                    </div>
                    <span className="full-review-artist">
                        Artist
                    </span>
                    <span className="full-review-user">
                        User
                    </span>
                    <span className="full-review-description">
                        Review
                    </span>
                    <span className="full-review-rating">
                        Rating:{" "}
                        <span className="full-review-num">
                            1
                        </span>
                    </span>
                </div>
            </div>
            <button className="full-review-button">
                <span className="full-review-button-text" onClick={navigateToComment} >
                    Comment
                </span>
            </button>
            <span className="full-review-review-title">
                All Comments
            </span>
            <div className="full-review-reviews">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};
export default Review;
