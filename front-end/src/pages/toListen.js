import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./toListen.css";

import Album from "../components/albumMini";
import Menu from "../components/menu";

const ToListenAlbums = () => {
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

    const [user, setUser] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/user.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setUser(parsedData.data[0]);
          })
          .catch((error) => console.error(`Error: ${error}`));
    }, []);

    return (
        <div className="to-listen">
            <span className="to-listen-title">
                <span className="to-listen-username">
                    {user.name || "User Name"}'s
                </span>
                {" "}To Listen
            </span>
            <div className="to-listen-albums-mini">
                {albums.slice(0, 5).map((album) => (
                    <Album key={album.id} album={album} />
                ))}
            </div>
            <div className="to-listen-albums-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default ToListenAlbums;
