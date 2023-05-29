import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./albumMini.css";

import Placeholder from '../assets/placeholder.PNG';

const Album = () => {
    const navigate = useNavigate();

    const navigateToAlbum = () => {
        navigate("/Album");
    }

    return (
    <div className="albumMini">
        <img className="albumMini-image" src={Placeholder} alt="album" onClick={navigateToAlbum} />
        <span className="albumMini-title">
            Album Title
        </span>
        <span className="albumMini-artist">
            Album Artist
        </span>
    </div>
  );
};
export default Album;