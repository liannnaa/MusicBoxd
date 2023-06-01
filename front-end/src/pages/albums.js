import React from 'react';
import "./albums.css";

import Album from "../components/albumMini";
import Menu from "../components/menu";

const Albums = () => {
    return (
        <div className="albums">
            <span className="album-title">
                Popular Albums
            </span>
            <div className="album-mini">
                <Album/>
                <Album/>
                <Album/>
            </div>
            <div className="album-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Albums;
