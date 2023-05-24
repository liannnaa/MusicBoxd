import React from 'react';
import "./homepage.css";

import union from '../assets/union.svg';

import Placeholder from '../assets/placeholder.PNG';

import Cardreview from "../components/cardReview";
import PopularList from "../components/listMini";

const Homepage = () => {
    return (
    <div className="homepage">
        <div className="heading">
            <img className="union" src={union} alt="union" />
            <img className="pp" src={Placeholder} alt="profile" />
        </div>
        <span className="hello">
            Hello, User!
        </span>
        <span className="review-or-track-music-youve-list">
            Review or track music you’ve listened to...
        </span>
        <span className="popular-albums-this-month">
            Popular Albums This Month
        </span>
        <div className="popular-albums">
            <img className="popular-album" src={Placeholder} alt="album1" />
            <img className="popular-album" src={Placeholder} alt="album2" />
            <img className="popular-album" src={Placeholder} alt="album3" />
            <img className="popular-album" src={Placeholder} alt="album4" />
            <img className="popular-album"src={Placeholder} alt="album5" />
        </div>

        <span className="popular-lists-this-month">
            Popular Lists This Month
        </span>
        <div className="popular-lists">
            <PopularList/>
            <PopularList/>
            <PopularList/>
        </div>
    </div>
  );
};
export default Homepage;
