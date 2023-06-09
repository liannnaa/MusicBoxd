import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./commentMini.css";

import arrow from '../assets/back.png';

import Placeholder from '../assets/placeholder.PNG';

const Comment = ({comment}) => {
    const navigate = useNavigate();

    const navigateToComments = () => {
        navigate("/FullComment");
    }

    const maxLength = 50;
    const truncate = (input) => {
        if (input.length > maxLength) {
             return input.substring(0, maxLength) + '...';
        }
        return input;
    };

    return (
    <div className='commentMini'>
        <div className="commentMini-card" onClick={navigateToComments} >
            <img className="commentMini-pp" src={comment.profile || Placeholder} alt="pp" />
            <div className="commentMini-contents">
                <span className="commentMini-title">
                    {comment.commenter || "Commenter"}
                </span>
                <span className="commentMini-comment">
                    {truncate(comment.comment) || "List Comment"}
                </span>
                <div className="commentMini-expand">
                    <span className="commentMini-read-more">
                        Read More
                    </span>
                    <img className="commentMini-arrow" src={arrow} alt="arrow" />
                </div>
            </div>
            <img className="commentMini-cover" src={comment.cover || Placeholder} alt="cover" />
        </div>
    </div>
  );
};
export default Comment;