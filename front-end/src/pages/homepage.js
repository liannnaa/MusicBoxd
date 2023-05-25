import React, { useState } from 'react';
import "./homepage.css";

import hamburger from '../assets/hamburger.svg';

import Placeholder from '../assets/placeholder.PNG';

import PopularAlbum from "../components/albumMini";
import PopularList from "../components/listMini";
import RecentReview from "../components/reviewMini";
import SideBar from "../components/sidebar";

const Homepage = () => {
    const [showUserInformation, setShowUserInformation] = useState(false);

    return (
        <div className="homepage">
            <div className="homepage-heading">
                <img className="homepage-hamburger" src={hamburger} alt="hamburger" onClick={() => setShowUserInformation(!showUserInformation)} />
                <img className="homepage-pp" src={Placeholder} alt="profile" />
            </div>
            {showUserInformation && <SideBar hideSidebar={() => setShowUserInformation(false)} />}
            <span className="homepage-hello">
                Hello, 
                <span className="homepage-username">
                    User
                </span>!
            </span>
            <span className="homepage-intro">
                Review or track music you’ve listened to...
            </span>
            <span className="homepage-section-title">
                Popular Albums This Month
            </span>
            <div className="homepage-section-contents">
                <PopularAlbum/>
                <PopularAlbum/>
                <PopularAlbum/>
                <PopularAlbum/>
            </div>
            <span className="homepage-section-title">
                Popular Lists This Month
            </span>
            <div className="homepage-section-contents">
                <PopularList/>
                <PopularList/>
                <PopularList/>
                <PopularList/>
            </div>
            <span className="homepage-section-title">
                Recent Friend's Reviews
            </span>
            <div className="homepage-reviews">
                <RecentReview/>
                <RecentReview/>
                <RecentReview/>
                <RecentReview/>
            </div>
        </div>
    );
};
export default Homepage;
