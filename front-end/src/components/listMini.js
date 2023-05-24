import React from 'react';
import "./listMini.css";

import heart from '../assets/heart.svg';
import comment from '../assets/comment.svg';

import Placeholder from '../assets/placeholder.PNG';

const ListMini = () => {
    return (
    <div className="list">
        <img className="list-image" src={Placeholder} alt="list" />
        <span className="list-title">
            List Title
        </span>
        <span className="list-user">
            <img className="list-pp" src={Placeholder} alt="profile" />
            <span className="list-name">
                User
            </span>
            <img className="list-heart" src={heart} alt="heart" />
            <span className="list-num">
                1
            </span>
            <img className="list-comment" src={comment} alt="comment" />
            <span className="list-num">
                1
            </span>
        </span>
    </div>
    );
  };
  export default ListMini;