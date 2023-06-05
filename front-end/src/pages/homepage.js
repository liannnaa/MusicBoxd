import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import "./homepage.css";

import hamburger from '../assets/hamburger.svg';

import Placeholder from '../assets/placeholder.PNG';

import PopularAlbum from "../components/albumMini";
import PopularList from "../components/listMini";
import RecentReview from "../components/reviewMini";
import SideBar from "../components/sidebar";
import Menu from "../components/menu";

const Homepage= () => {
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
        <div className="homepage">
            <div className="homepage-heading">
                <img className="homepage-hamburger" src={hamburger} alt="hamburger" onClick={() => setShowUserInformation(!showUserInformation)} />
                <img className="homepage-pp" src={user.profile || Placeholder} alt="profile" />
            </div>
            {showUserInformation && <SideBar hideSidebar={() => setShowUserInformation(false)} user={user} />}
            <span className="homepage-hello">
                Hello,{" "}
                <span className="homepage-username">
                    {user.name || "User Name"}
                </span>!
            </span>
            <span className="homepage-intro">
                Review or track music you’ve listened to...
            </span>
            <span className="homepage-section-title" onClick={navigateToAlbums} >
                Popular Albums This Month
            </span>
            <div className="homepage-section-contents">
                {albums.slice(0, 3).map((album) => (
                    <PopularAlbum key={album.id} album={album} />
                ))}
            </div>
            <span className="homepage-section-title" onClick={navigateToLists}>
                Popular Lists This Month
            </span>
            <div className="homepage-section-contents">
                {lists.slice(0, 3).map((list) => (
                    <PopularList key={list.id} list={list} />
                ))}
            </div>
            <span className="homepage-section-title" onClick={navigateToReviews} >
                Recent Friend's Reviews
            </span>
            <div className="homepage-reviews">
                {reviews.slice(0, 3).map((review) => (
                    <RecentReview key={review.id} review={review} />
                ))}
            </div>
            <div className="homepage-section-contents">
                <Menu/>
            </div>
        </div>
    );
};

export default Homepage;