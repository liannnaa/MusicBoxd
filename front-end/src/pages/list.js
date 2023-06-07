import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Papa from 'papaparse';
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

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/album.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setAlbums(parsedData.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/comment.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setComments(parsedData.data);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

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
        <div className="list">
            <img className="list-back" src={Placeholder} alt="arrow" onClick={navigateToHome} />
            <div className="list-heading">
                <img className="list-cover" src={list.cover || Placeholder} alt="cover" />
                <div className="list-heading-right">
                    <div className="list-head">
                        <span className="list-title">
                            {list.title || "List"}
                        </span>
                    </div>
                    <span className="list-user">
                        {list.user || "User"}
                    </span>
                    <span className="list-description">
                        {list.description || "Description"}
                    </span>
                    <span className="list-likes">
                        Likes:{" "}
                        <span className="list-num">
                            {list.hearts || "1"}
                        </span>
                    </span>
                </div>
            </div>
            <div className="list-buttons">
                <button className="list-button" onClick={navigateToComment} >
                    <span className="list-button-text" >
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
                {albums.slice(0, 3).map((album) => (
                    <Album key={album.id} album={album} />
                ))}
            </div>
            <span className="list-comment-title">
                Comments
            </span>
            <div className="list-comments">
                {comments.slice(0, 3).map((comment) => (
                    <Comment key={comment.id} comment={comment} />
                ))}
            </div>
        </div>
    );
};
export default List;
