import React from 'react';
import "./friendReviews.css";

import Review from "../components/reviewMini";
import Menu from "../components/menu";

const Reviews = () => {
    return (
        <div className="friend-reviews">
            <span className="friend-reviews-title">
                Friend Reviews
            </span>
            <div className="friend-reviews-mini">
                <Review/>
                <Review/>
                <Review/>
            </div>
            <div className="friend-reviews-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Reviews;