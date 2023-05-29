import React from 'react';
import "./albumMini.css";

import Placeholder from '../assets/placeholder.PNG';

const Album = () => {
    return (
    <div className="albumMini">
        <img className="albumMini-image" src={Placeholder} alt="album" />
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