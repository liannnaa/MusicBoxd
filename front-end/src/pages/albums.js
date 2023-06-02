import React from 'react';
import "./albums.css";

import Album from "../components/albumMini";
import Menu from "../components/menu";

const Albums = () => {
    return (
        <div className="albums">
            <span className="albums-title">
                Popular Albums
            </span>
            <div className="albums-mini">
                <Album/>
                <Album/>
                <Album/>
            </div>
            <div className="albums-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Albums;
