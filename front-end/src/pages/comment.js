import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
import './comment.css';

import Placeholder from "../assets/placeholder.PNG";

import back from "../assets/back.png";

const Comment = () => {
  const navigate = useNavigate();
  
  const navigateToList = () => {
    navigate("/List");
  }

  const [list, setList] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/list.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setList(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

  return (
    <div className="comment">
        <div className="comment-top">
            <img className="comment-back" src={back} alt="arrow" onClick={navigateToList} />
                <span className="comment-head">
                    Write Your Comment
                </span>
        </div>
        <div className="comment-header">
            <div className="comment-left">
                <div className="comment-name">
                    <span className="comment-title">
                        {list.title || "List"}
                    </span>
                </div>
            </div>
            <img className="comment-cover" src={list.cover || Placeholder} alt="list" />
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