import React from 'react';
import "./listMini.css";

import heart from '../assets/heart.svg';
import { useNavigate } from 'react-router-dom';
import comment from '../assets/comment.svg';

import Placeholder from '../assets/placeholder.PNG';

const ListMini = ({list}) => {
    const navigate = useNavigate();

    const navigateToList = () => {
        navigate("/List");
    }

    return (
    <div className="listMini" >
        <img className="listMini-image" src={list.cover || Placeholder} alt="list" onClick={navigateToList} />
        <span className="listMini-title">
            {list.title || "List Title"}
        </span>
        <span className="listMini-user">
            <img className="listMini-pp" src={list.profile || Placeholder} alt="profile" />
            <span className="listMini-name">
                {list.user || "User"}
            </span>
            <img className="listMini-heart" src={heart} alt="heart" />
            <span className="listMini-num">
                {list.hearts || "1"}
            </span>
            <img className="listMini-comment" src={comment} alt="comment" />
            <span className="listMini-num">
                {list.comments || "1"}
            </span>
        </span>
    </div>
    );
  };
  export default ListMini;