import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import "./profile.css";

import Placeholder from '../assets/placeholder.PNG';

import AlbumCover from "../components/albumMini";
import RecentReview from "../components/reviewMini";
import Menu from "../components/menu";

const Profile = () => {
    const navigate = useNavigate();

    const navigateToReviews = () => {
        navigate("/UserReviews");
    }

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        axios
        .get(`https://my.api.mockaroo.com/album.json?key=${process.env.REACT_APP_MOCKAROO}`)
        .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setAlbums(parsedData.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }, []);   

    return (
        <div className="profile">
            <img className="profile-banner" src={Placeholder} alt="banner" />
            <div className="profile-heading">
                <img className="profile-pp" src={Placeholder} alt="profile" />
                <span className="profile-username">
                    User
                </span>
                <div className="profile-social">
                    <button className="profile-follow">
                        1 Followers
                    </button>
                    <button className="profile-follow">
                        1 Following
                    </button>
                </div>
                <div className="profile-stats">
                    <div className="profile-stats-sec">
                        <span className="profile-num">1</span>
                        <span className="profile-cat">Total Albums</span>
                    </div>
                    <div className="profile-stats-sec">
                        <span className="profile-num">1</span>
                        <span className="profile-cat">Albums This Year</span>
                    </div>
                    <div className="profile-stats-sec">
                        <span className="profile-num">1</span>
                        <span className="profile-cat">Lists</span>
                    </div>
                    <div className="profile-stats-sec">
                        <span className="profile-num">1</span>
                        <span className="profile-cat">Review</span>
                    </div>
                </div>
            </div>
            <span className="profile-section-title">
                User's Favorite Albums
            </span>
            <div className="profile-section-contents">
                {albums.map((album) => (
                    <AlbumCover key={album.id} album={album} />
                ))}
            </div>
            <span className="profile-section-title">
                User's Recent Listened
            </span>
            <div className="profile-section-contents">
                {albums.map((album) => (
                    <AlbumCover key={album.id} album={album} />
                ))}
            </div>
            <span className="profile-section-title" onClick={navigateToReviews} >
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
