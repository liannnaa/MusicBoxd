import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./albumMini.css";

import Placeholder from '../assets/placeholder.PNG';

const Album = ({album}) => {
    const navigate = useNavigate();

    const navigateToAlbum = () => {
        navigate("/Album");
    }

    if (!album) {
        return null;
    }
    
    return (
    <div className="albumMini">
        <img className="albumMini-image" src={album.cover || Placeholder} alt="cover" onClick={navigateToAlbum} />
        <span className="albumMini-title">
            {album.title || "Album Title"}
        </span>
        <span className="albumMini-artist">
            {album.artist || "Album Artist"}
        </span>
    </div>
  );
};
export default Album;