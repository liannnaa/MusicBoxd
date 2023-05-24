import React from 'react';
import "./albumMini.css";

import Placeholder from '../assets/placeholder.PNG';

const Album = () => {
    return (
    <div className="album">
        <img className="album-image" src={Placeholder} alt="album" />
        <span className="album-title">
            Album Title
        </span>
        <span className="album-artist">
            Album Artist
        </span>
    </div>
  );
};
export default Album;