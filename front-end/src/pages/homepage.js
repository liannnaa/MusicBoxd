import React from 'react';
import "./homepage.css";

import union from '../assets/union.svg';

import Placeholder from '../assets/placeholder.PNG';

import Cardreview from "../components/cardReview";
import PopularAlbum from "../components/albumMini";
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
        <span className="intro">
            Review or track music you’ve listened to...
        </span>
        <span className="section-title">
            Popular Albums This Month
        </span>
        <div className="section-contents">
            <PopularAlbum/>
            <PopularAlbum/>
            <PopularAlbum/>
        </div>

        <span className="section-title">
            Popular Lists This Month
        </span>
        <div className="section-contents">
            <PopularList/>
            <PopularList/>
            <PopularList/>
        </div>
    </div>
  );
};
export default Homepage;
