import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./album.css";

import Placeholder from '../assets/placeholder.PNG';

import Review from "../components/reviewMini";

const Album = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/Home");
    }

    const navigateToReview = () => {
        navigate("/Review");
    }

    return (
        <div className="album">
            <img className="album-back" src={Placeholder} alt="arrow" onClick={navigateToHome} />
            <div className="album-heading">
                <img className="album-cover" src={Placeholder} alt="cover" />
                <div className="album-heading-right">
                    <div className="album-head">
                        <span className="album-title">
                            Album
                        </span>
                        <span className="album-year">
                            Year
                        </span>
                    </div>
                    <span className="album-artist">
                        Artist
                    </span>
                    <span className="album-description">
                        Description
                    </span>
                    <span className="album-rating">
                        Rating:{" "}
                        <span className="album-num">
                            1
                        </span>
                    </span>
                </div>
            </div>
            <div className="album-buttons">
                <button className="album-button">
                    <span className="album-button-text" onClick={navigateToReview} >
                        Review
                    </span>
                </button>
                <button className="album-button">
                    <span className="album-button-text">
                        Add to Lists
                    </span>
                </button>
                <button className="album-button">
                    <span className="album-button-text">
                        Add to To Listen
                    </span>
                </button>
            </div>
            <span className="album-review-title">
                All Reviews
            </span>
            <div className="album-reviews">
                <Review />
                <Review />
                <Review />
            </div>
        </div>
    );
};
export default Album;
