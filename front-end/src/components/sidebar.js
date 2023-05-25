import React from 'react';
import "./sidebar.css";

import Placeholder from '../assets/placeholder.PNG';
import Hamburger from '../assets/hamburger.svg';
import Home from '../assets/home.svg'
import Albums from '../assets/albums.svg';
import Diary from '../assets/diary.svg';
import Reviews from '../assets/reviews.svg';
import ToListen from '../assets/toListen.svg';
import Lists from '../assets/list.svg';
import Likes from '../assets/likes.svg';
import Logout from '../assets/logout.svg';

const Sidebar = ({ hideSidebar }) => {
    return (
        <div className="sidebar">
            <div className="sidebar-rectangle">
                <img className="sidebar-hamburger" src={Hamburger} alt="hamburger" onClick={hideSidebar} />
                <div className="sidebar-profile">
                    <img className="sidebar-pp" src={Placeholder} alt="profile" />
                    <div className="sidebar-usernames">
                        <span className="sidebar-name">
                            User
                        </span>
                        <span className="sidebar-user">
                            @user
                        </span>
                    </div>
                </div>
                <div className="sidebar-social">
                    <button className="sidebar-follow">
                        <div className="sidebar-follow-outline" />
                    </button>
                    <button className="sidebar-follow">
                        <div className="sidebar-follow-outline" />
                    </button>
                </div>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={Home} alt="home" />
                    <span className="sidebar-item-text">
                        Home
                    </span>
                </button>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={Albums} alt="albums" />
                    <span className="sidebar-item-text">
                        Albums
                    </span>
                </button>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={Diary} alt="diary" />
                    <span className="sidebar-item-text">
                        Diary
                    </span>
                </button>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={Reviews} alt="reviews" />
                    <span className="sidebar-item-text">
                        Reviews
                    </span>
                </button>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={ToListen} alt="to listen" />
                    <span className="sidebar-item-text">
                        To Listen
                    </span>
                </button>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={Lists} alt="lists" />
                    <span className="sidebar-item-text">
                        Lists
                    </span>
                </button>
                <button className="sidebar-item">
                    <img className="sidebar-item-icon" src={Likes} alt="likes" />
                    <span className="sidebar-item-text">
                        Likes
                    </span>
                </button>
                <div className="sidebar-logout">
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