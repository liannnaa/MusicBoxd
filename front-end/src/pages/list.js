import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./list.css";

import Placeholder from '../assets/placeholder.PNG';

import Album from '../components/albumMini';
import Comment from '../components/commentMini';

const List = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/Home");
    }

    const navigateToComment = () => {
        navigate("/Comment");
    }

    return (
        <div className="list">
            <img className="list-back" src={Placeholder} alt="arrow" onClick={navigateToHome} />
            <div className="list-heading">
                <img className="list-cover" src={Placeholder} alt="cover" />
                <div className="list-heading-right">
                    <div className="list-head">
                        <span className="list-title">
                            List
                        </span>
                    </div>
                    <span className="list-user">
                        User
                    </span>
                    <span className="list-description">
                        Description
                    </span>
                    <span className="list-likes">
                        Likes:{" "}
                        <span className="list-num">
                            1
                        </span>
                    </span>
                </div>
            </div>
            <div className="list-buttons">
                <button className="list-button">
                    <span className="list-button-text" onClick={navigateToComment} >
                        Comment
                    </span>
                </button>
                <button className="list-button">
                    <span className="list-button-text">
                        Like
                    </span>
                </button>
            </div>
            <div className="list-albums">
                <Album />
                <Album />
                <Album />
            </div>
            <span className="list-comment-title">
                Comments
            </span>
            <div className="list-comments">
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    );
};
export default List;
