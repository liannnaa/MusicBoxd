import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import './reviewPage.css';

import Placeholder from "../assets/placeholder.PNG";

const Review = () => {
    const navigate = useNavigate();
  
    const navigateToAlbum = () => {
        navigate("/Album");
    }

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
        <div className="review">
            <div className="review-top">
                <img className="review-back" src={Placeholder} alt="arrow" onClick={navigateToAlbum} />
                    <span className="review-head">
                        Write Your Review
                    </span>
            </div>
            <div className="review-header">
                <div className="review-left">
                    <span className="review-title">
                        {album.title || "Album"}
                    </span>
                    <span className="review-sub">
                        Give your rating
                    </span>
                    <div className="review-rate">
                        <img className="review-heart" src={Placeholder} alt="heart" />
                    </div>
                </div>
                <img className="review-cover" src={album.cover || Placeholder} alt="album" />
            </div>
            <textarea className="review-input" placeholder="Write down your review..."></textarea>
            <button className="review-button" onClick={navigateToAlbum} >
                <span className="review-button-text">
                    Publish
                </span>
            </button>
        </div>
    );
};

export default Review;