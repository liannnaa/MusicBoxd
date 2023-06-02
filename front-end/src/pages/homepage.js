import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./homepage.css";

import hamburger from '../assets/hamburger.svg';

import Placeholder from '../assets/placeholder.PNG';

import PopularAlbum from "../components/albumMini";
import PopularList from "../components/listMini";
import RecentReview from "../components/reviewMini";
import SideBar from "../components/sidebar";
import Menu from "../components/menu";

const Homepage = () => {
    const navigate = useNavigate();

    const navigateToAlbums = () => {
        navigate("/Albums");
    }

    const navigateToLists = () => {
        navigate("/Lists");
    }

    const navigateToReviews = () => {
        navigate("/FriendReviews");
    }

    const [showUserInformation, setShowUserInformation] = useState(false);

    return (
        <div className="homepage">
            <div className="homepage-heading">
                <img className="homepage-hamburger" src={hamburger} alt="hamburger" onClick={() => setShowUserInformation(!showUserInformation)} />
                <img className="homepage-pp" src={Placeholder} alt="profile" />
            </div>
            {showUserInformation && <SideBar hideSidebar={() => setShowUserInformation(false)} />}
            <span className="homepage-hello">
                Hello,{" "}
                <span className="homepage-username">
                    User
                </span>!
            </span>
            <span className="homepage-intro">
                Review or track music you’ve listened to...
            </span>
            <span className="homepage-section-title" onClick={navigateToAlbums} >
                Popular Albums This Month
            </span>
            <div className="homepage-section-contents">
                <PopularAlbum/>
                <PopularAlbum/>
                <PopularAlbum/>
            </div>
            <span className="homepage-section-title" onClick={navigateToLists}>
                Popular Lists This Month
            </span>
            <div className="homepage-section-contents">
                <PopularList/>
                <PopularList/>
                <PopularList/>
            </div>
            <span className="homepage-section-title" onClick={navigateToReviews} >
                Recent Friend's Reviews
            </span>
            <div className="homepage-reviews">
                <RecentReview/>
                <RecentReview/>
                <RecentReview/>
            </div>
            <div className="homepage-section-contents">
                <Menu/>
            </div>
        </div>
    );
};
export default Homepage;
