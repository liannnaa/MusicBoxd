import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./friendReviews.css";

import Review from "../components/reviewMini";
import Menu from "../components/menu";

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/review.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setReviews(parsedData.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="friend-reviews">
            <span className="friend-reviews-title">
                Friend Reviews
            </span>
            <div className="friend-reviews-mini">
                {reviews.map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
            <div className="friend-reviews-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Reviews;