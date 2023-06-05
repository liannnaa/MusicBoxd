import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
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

    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/comment.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setComments(parsedData.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    const [review, setReview] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/review.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setReview(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="full-review">
            <img className="full-review-back" src={Placeholder} alt="arrow" onClick={navigateToHome} />
            <div className="full-review-heading">
                <img className="full-review-cover" src={review.cover || Placeholder} alt="cover" />
                <div className="full-review-heading-right">
                    <div className="full-review-head">
                        <span className="full-review-title">
                            {review.title || "Album Title"}
                        </span>
                    </div>
                    <span className="full-review-artist">
                        {review.artist || "Album Artist"}
                    </span>
                    <span className="full-review-user">
                        {review.reviewer || "Reviewer"}
                    </span>
                    <span className="full-review-description">
                        {review.review || "Description"}
                    </span>
                    <span className="full-review-rating">
                        Rating:{" "}
                        <span className="full-review-num">
                            {review.rating || "1"}
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
                {comments.slice(0, 3).map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};
export default Review;
