import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import "./profile.css";

import Placeholder from '../assets/placeholder.PNG';

import AlbumCover from "../components/albumMini";
import ListCover from "../components/listMini";
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

    const [lists, setLists] = useState([]);
    useEffect(() => {
        axios
        .get(`https://my.api.mockaroo.com/list.json?key=${process.env.REACT_APP_MOCKAROO}`)
        .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setLists(parsedData.data);
        })
        .catch((error) => console.error(`Error: ${error}`));
    }, []);

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
        <div className="profile">
            <img className="profile-banner" src={Placeholder} alt="banner" />
            <div className="profile-heading">
                <img className="profile-pp" src={user.profile || Placeholder} alt="profile" />
                <span className="profile-username">
                    {user.user || "User"}
                </span>
                <div className="profile-social">
                    <button className="profile-follow">
                        {user.followers || "1"} Followers
                    </button>
                    <button className="profile-follow">
                        {user.following || "1"} Following
                    </button>
                </div>
                <div className="profile-stats">
                    <div className="profile-stats-sec">
                        <span className="profile-num">{user.albums || 1}</span>
                        <span className="profile-cat">Total Albums</span>
                    </div>
                    <div className="profile-stats-sec">
                        <span className="profile-num">{user.year || 1}</span>
                        <span className="profile-cat">Albums This Year</span>
                    </div>
                    <div className="profile-stats-sec">
                        <span className="profile-num">{user.lists || 1}</span>
                        <span className="profile-cat">Lists</span>
                    </div>
                    <div className="profile-stats-sec">
                        <span className="profile-num">{user.reviews || 1}</span>
                        <span className="profile-cat">Reviews</span>
                    </div>
                </div>
            </div>
            <span className="profile-section-title">
                User's Favorite Albums
            </span>
            <div className="profile-section-contents">
                {albums.slice(0, 3).map((album) => (
                    <AlbumCover key={album.id} album={album} />
                ))}
            </div>
            <span className="profile-section-title">
                User's Recent Lists
            </span>
            <div className="profile-section-contents">
                {lists.slice(0, 3).map((list) => (
                    <ListCover key={list.id} list={list} />
                ))}
            </div>
            <span className="profile-section-title" onClick={navigateToReviews} >
                User's Recent Reviewed
            </span>
            <div className="profile-reviews">
                {reviews.slice(0, 3).map((review) => (
                    <RecentReview key={review.id} review={review} />
                ))}
            </div>
            <div className="profile-section-contents">
                <Menu/>
            </div>
        </div>
    );
};
export default Profile;
