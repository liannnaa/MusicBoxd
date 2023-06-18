import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./sidebar.css";

import Placeholder from '../assets/placeholder.PNG';

import Hamburger from '../assets/menu.png';
import Albums from '../assets/albums.png';
import Lists from '../assets/lists.png';
import Reviews from '../assets/review.png';
import ToListen from '../assets/toListen.png';
import Hearts from '../assets/heart.png';
import Logout from '../assets/logout.png';

const Sidebar = ({ hideSidebar, user }) => {
    const navigate = useNavigate();

    const navigateToAlbums = () => {
        navigate("/UserAlbums");
    }
    const navigateToLists = () => {
        navigate("/UserLists");
    }
    const navigateToReviews = () => {
        navigate("/UserReviews");
    }
    const navigateToListen = () => {
        navigate("/ToListen");
    }
    const navigateToHearts = () => {
        navigate("/Hearts");
    }
    const navigateToOnboard = () => {
        navigate("/");
    }

    return (
        <div className="sidebar">
            <div className="sidebar-contents">
                <img className="sidebar-hamburger" src={Hamburger} alt="hamburger" onClick={hideSidebar} />
                <div className="sidebar-profile">
                    <img className="sidebar-pp" src={user.profile || Placeholder} alt="profile" />
                    <div className="sidebar-usernames">
                        <span className="sidebar-name">
                            {user.name || "User"}
                        </span>
                        <span className="sidebar-user">
                            @{user.user || "user"}
                        </span>
                    </div>
                </div>
                <div className="sidebar-social">
                    <button className="sidebar-follow">
                        <div className="sidebar-follow-outline">
                            <span className="sidebar-follow-text">
                                {user.followers || "1"} Followers
                            </span>
                        </div>
                    </button>
                    <button className="sidebar-follow">
                        <div className="sidebar-follow-outline">
                            <span className="sidebar-follow-text">
                                {user.following || "1"} Following
                            </span>
                        </div>
                    </button>
                </div>
                <button className="sidebar-item" onClick={navigateToAlbums} >
                    <img className="sidebar-item-icon" src={Albums} alt="Albums" />
                    <span className="sidebar-item-text">
                        Albums
                    </span>
                </button>
                <button className="sidebar-item" onClick={navigateToLists} >
                    <img className="sidebar-item-icon" src={Lists} alt="Lists" />
                    <span className="sidebar-item-text">
                        Lists
                    </span>
                </button>
                <button className="sidebar-item" onClick={navigateToReviews} >
                    <img className="sidebar-item-icon" src={Reviews} alt="Reviews" />
                    <span className="sidebar-item-text">
                        Reviews
                    </span>
                </button>
                <button className="sidebar-item" onClick={navigateToListen} >
                    <img className="sidebar-item-icon" src={ToListen} alt="ToListen" />
                    <span className="sidebar-item-text">
                        To Listen
                    </span>
                </button>
                <button className="sidebar-item" onClick={navigateToHearts} >
                    <img className="sidebar-item-icon" src={Hearts} alt="Hearts" />
                    <span className="sidebar-item-text">
                        Hearts
                    </span>
                </button>
                <div className="sidebar-logout" onClick={navigateToOnboard} >
                    <img className="sidebar-logout-icon" src={Logout} alt="logout" />
                    <span className="sidebar-logout-text">
                        Logout
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;