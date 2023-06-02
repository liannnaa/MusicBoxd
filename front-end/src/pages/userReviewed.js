import React from 'react';
import "./userReviewed.css";

import Review from "../components/reviewMini";
import Menu from "../components/menu";

const Reviews = () => {
    return (
        <div className="user-reviews">
            <span className="user-reviews-title">
                User Reviews
            </span>
            <div className="user-reviews-mini">
                <Review/>
                <Review/>
                <Review/>
            </div>
            <div className="user-reviews-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Reviews;