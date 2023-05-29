import React from 'react';
import "./listMini.css";

import heart from '../assets/heart.svg';
import comment from '../assets/comment.svg';

import Placeholder from '../assets/placeholder.PNG';

const ListMini = () => {
    return (
    <div className="listMini">
        <img className="listMini-image" src={Placeholder} alt="list" />
        <span className="listMini-title">
            List Title
        </span>
        <span className="listMini-user">
            <img className="listMini-pp" src={Placeholder} alt="profile" />
            <span className="listMini-name">
                User
            </span>
            <img className="listMini-heart" src={heart} alt="heart" />
            <span className="listMini-num">
                1
            </span>
            <img className="listMini-comment" src={comment} alt="comment" />
            <span className="listMini-num">
                1
            </span>
        </span>
    </div>
    );
  };
  export default ListMini;