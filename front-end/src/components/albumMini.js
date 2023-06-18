import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./albumMini.css";

import Placeholder from '../assets/placeholder.PNG';

const Album = ({album}) => {
    const navigate = useNavigate();

    const navigateToAlbum = () => {
        navigate("/Album");
    }
    
    const maxLength = 20;
    const truncate = (input) => {
        if (input.length > maxLength) {
             return input.substring(0, maxLength) + '...';
        }
        return input;
    };

    return (
    <div className="albumMini">
        <img className="albumMini-image" src={album.cover || Placeholder} alt="cover" onClick={navigateToAlbum} />
        <span className="albumMini-title">
            {truncate(album.title) || "Album Title"}
        </span>
        <span className="albumMini-artist">
            {truncate(album.artist) || "Album Artist"}
        </span>
    </div>
  );
};
export default Album;