import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import "./album.css";

import Placeholder from '../assets/placeholder.PNG';

import back from '../assets/back.png';

import Review from "../components/reviewMini";

const Album = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/Home");
    }

    const navigateToReview = () => {
        navigate("/Review");
    }

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

    const [album, setAlbum] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/album.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setAlbum(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="album">
            <img className="album-back" src={back} alt="arrow" onClick={navigateToHome} />
            <div className="album-heading">
                <img className="album-cover" src={album.cover || Placeholder} alt="cover" />
                <div className="album-heading-right">
                    <div className="album-head">
                        <span className="album-title">
                            {album.title || "Album Title"}
                        </span>
                        <span className="album-year">
                            {album.year || "Album Year"}
                        </span>
                    </div>
                    <span className="album-artist">
                        {album.artist || "Album Artist"}
                    </span>
                    <span className="album-rating">
                        Rating:{" "}
                        <span className="album-num">
                            {album.rating || 1}
                        </span>
                    </span>
                </div>
            </div>
            <div className="album-buttons">
                <button className="album-button" onClick={navigateToReview} >
                    <span className="album-button-text" >
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
                {reviews.slice(0, 3).map((review) => (
                    <Review key={review.id} review={review} />
                ))}
            </div>
        </div>
    );
};
export default Album;
