import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./userReviewed.css";

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

    const [user, setUser] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/user.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setUser(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="user-reviews">
            <span className="user-reviews-title">
            <span className="user-lists-username">
                    {user.name || "User Name"}'s
                </span>
                {" "}Reviews
            </span>
            <div className="user-reviews-mini">
                {reviews.slice(0, 3).map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
            <div className="user-reviews-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Reviews;