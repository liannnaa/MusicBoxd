import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./albums.css";

import Album from "../components/albumMini";
import Menu from "../components/menu";

const Albums = () => {
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

    return (
        <div className="albums">
            <span className="albums-title">
                Popular Albums
            </span>
            <div className="albums-mini">
                {albums.map((album) => (
                    <Album key={album.id} album={album} />
                ))}
            </div>
            <div className="albums-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Albums;
