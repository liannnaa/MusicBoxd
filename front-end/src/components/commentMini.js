import React from 'react';
import "./commentMini.css";

import arrow from '../assets/arrowRight.svg';

import Placeholder from '../assets/placeholder.PNG';

const Comment = () => {
    return (
    <div className='commentMini'>
        <div className="commentMini-card">
            <img className="commentMini-pp" src={Placeholder} alt="pp" />
            <div className="commentMini-contents">
                <span className="commentMini-title">
                    User
                </span>
                <span className="commentMini-comment">
                    List Comment
                </span>
                <div className="commentMini-expand">
                    <span className="commentMini-read-more">
                        Read More
                    </span>
                    <img className="commentMini-arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            <img className="commentMini-cover" src={Placeholder} alt="cover" />
        </div>
    </div>
  );
};
export default Comment;