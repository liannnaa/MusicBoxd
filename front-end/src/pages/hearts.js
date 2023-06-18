import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import "./hearts.css";

import Album from "../components/albumMini";
import List from "../components/listMini";
import Menu from "../components/menu";

const Hearts = () => {
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

    const [lists, setLists] = useState([]);
    useEffect(() => {
        axios
          .get(`https://my.api.mockaroo.com/list.json?key=${process.env.REACT_APP_MOCKAROO}`)
          .then((response) => {
            let parsedData = Papa.parse(response.data, {
                header: true,
                dynamicTyping: true,
            });
            setLists(parsedData.data);
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
        <div className="hearts">
            <span className="hearts-title">
                <span className="hearts-username">
                    {user.name || "User Name"}'s
                </span>
                {" "}Hearts
            </span>
            <span className="hearts-sub">
                Albums
            </span>
            <div className="hearts-mini">
                {albums.slice(0, 5).map((album) => (
                    <Album key={album.id} album={album} />
                ))}
            </div>
            <span className="hearts-sub">
                Lists
            </span>
            <div className="hearts-mini">
                {lists.slice(0, 5).map((list) => (
                    <List key={list.id} list={list} />
                ))}
            </div>
            <div className="hearts-menu">
                <Menu/>
            </div>
        </div>
    );
};
export default Hearts;
