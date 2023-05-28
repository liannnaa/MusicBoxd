import React from 'react';
import "./profile.css";

import Placeholder from '../assets/placeholder.PNG';

import AlbumCover from "../components/albumMini";
import RecentReview from "../components/reviewMini";
import Menu from "../components/menu";

const Profile = () => {
    return (
        <div className="profile">
            <img className="profile-banner" src={Placeholder} alt="banner" />
            <div className="profile-heading">
                <img className="profile-pp" src={Placeholder} alt="profile" />
                <span className="profile-username">
                    User
                </span>
                <div className="profile-social">
                    <span className="profile-follow">
                        1 Followers
                    </span>
                    <span className="profile-follow">
                        1 Following
                    </span>
                </div>
                <div className="profile-stats">
                    <span className="profile-nums">
                        1 1 1 1
                    </span>
                    <span className="profile-categories">
                        Total Albums  Albums This Year  Lists  Review
                    </span>
                </div>
            </div>
            <span className="profile-section-title">
                User's Favorite Albums
            </span>
            <div className="profile-section-contents">
                <AlbumCover/>
                <AlbumCover/>
                <AlbumCover/>
            </div>
            <span className="profile-section-title">
                User's Recent Listened
            </span>
            <div className="profile-section-contents">
                <AlbumCover/>
                <AlbumCover/>
                <AlbumCover/>
            </div>
            <span className="profile-section-title">
                User's Recent Reviewed
            </span>
            <div className="profile-reviews">
                <RecentReview/>
                <RecentReview/>
                <RecentReview/>
            </div>
            <div className="profile-section-contents">
                <Menu/>
            </div>
        </div>
    );
};
export default Profile;
