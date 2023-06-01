import React from 'react';
import { useNavigate } from 'react-router-dom';
import './comment.css';

import Placeholder from "../assets/placeholder.PNG";

const Comment = () => {
  const navigate = useNavigate();
  
  const navigateToList = () => {
    navigate("/List");
  }

  return (
    <div className="comment">
        <div className="comment-top">
            <img className="comment-back" src={Placeholder} alt="arrow" onClick={navigateToList} />
                <span className="comment-head">
                    Write Your Comment
                </span>
        </div>
        <div className="comment-header">
            <div className="comment-left">
                <div className="comment-name">
                    <span className="comment-title">
                        List
                    </span>
                </div>
            </div>
            <img className="comment-cover" src={Placeholder} alt="list" />
        </div>
        <textarea className="comment-input" placeholder="Write down your comment..."></textarea>
        <button className="comment-button" onClick={navigateToList} >
            <span className="comment-button-text">
                Publish
            </span>
        </button>
    </div>
  );
};

export default Comment;