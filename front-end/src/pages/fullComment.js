import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import "./fullComment.css";

import Placeholder from '../assets/placeholder.PNG';

import back from '../assets/back.png';

const Comment = () => {
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate("/Home");
    }

    const [comment, setComment] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/comment.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setComment(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="full-comment">
            <img className="full-comment-back" src={back} alt="arrow" onClick={navigateToHome} />
            <div className="full-comment-heading">
                <img className="full-comment-cover" src={comment.cover || Placeholder} alt="cover" />
                <div className="full-comment-heading-right">
                    <div className="full-comment-head">
                        <span className="full-comment-title">
                            {comment.title || "Album Title"}
                        </span>
                    </div>
                    <span className="full-comment-artist">
                        {comment.artist || "Album Artist"}
                    </span>
                    <span className="full-comment-user">
                        {comment.commenter || "Commenter"}
                    </span>
                    <span className="full-comment-description">
                        {comment.comment || "Comment"}
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Comment;
