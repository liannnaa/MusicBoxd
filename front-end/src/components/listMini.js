import React from 'react';
import "./listMini.css";

import { useNavigate } from 'react-router-dom';

import Placeholder from '../assets/placeholder.PNG';

import heart from '../assets/heart.png';
import comment from '../assets/comment.png';

const ListMini = ({list}) => {
    const navigate = useNavigate();

    const navigateToList = () => {
        navigate("/List");
    }

    const maxLength = 20;
    const truncate = (input) => {
        if (input.length > maxLength) {
             return input.substring(0, maxLength) + '...';
        }
        return input;
    };

    return (
    <div className="listMini" >
        <img className="listMini-image" src={list.cover || Placeholder} alt="list" onClick={navigateToList} />
        <span className="listMini-title">
            {truncate(list.title) || "List Title"}
        </span>
        <span className="listMini-user">
            <img className="listMini-pp" src={list.profile || Placeholder} alt="profile" />
            <span className="listMini-name">
                {truncate(list.user) || "User"}
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